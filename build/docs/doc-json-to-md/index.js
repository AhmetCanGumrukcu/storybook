/**
 * docJsonToMd
 * Converts a JSON input to markdown.
 *
 *
 * @name docJsonToMd
 * @function
 * @param {Array|Object|String} data The input JSON data.
 * @return {String} The generated markdown result.
 */
function docJsonToMd(docJson) {

    function createMainHeader(header) {
        return '## ' + header;
    }

    function createSubHeader(subHeader) {
        return '### ' + subHeader;
    }

    function createPropName(name) {
        return '`' + name + '`\n';
    }

    function createPropProps(prop) {
        return '**' + prop + '**\n';
    }

    function createInterfaceSection(name, type, feature) {
        var line = '`' + name + '`   ';
        if (type !== undefined) {
            line += '**' + type + '**   ';
        }
        if (feature !== undefined) {
            line = line + '**' + feature + '**\n';
        } else {
            line = line + '\n';
        }
        return line;
    }

    function createDesc(desc) {
        return desc + '\n';
    }

    function createCodeBlock(code) {
        var block = '```\n' + code + '\n```\n';
        return block;
    }

	
    var mdText = [];
	
    for (var i = 0; i < docJson.length; i++) {
        var category = docJson[i];
        if (i == 0) {
            mdText.push(createMainHeader(category.name));
            mdText.push(createDesc(category.desc));
            if (category.sample) {
                mdText.push(createCodeBlock(category.sample));
            }
        } else {
 
            mdText.push(createSubHeader(category.name));

            var infoArr = category.infoArray;
            for (var j = 0; j < infoArr.length; j++) {
                //mdText.push(createPropName(infoArr[j].name));
                //if (infoArr[j].type) {
                //    mdText.push(createPropProps(infoArr[j].type));
                //}
                //if (infoArr[j].header) {
                //    mdText.push(createPropProps(infoArr[j].header));
                //}
                mdText.push(createInterfaceSection(infoArr[j].name, infoArr[j].type, infoArr[j].header))
                mdText.push(createDesc(infoArr[j].desc));
                if (infoArr[j].sample) {
                    mdText.push(createCodeBlock(infoArr[j].sample));
                }
            }
        }
	}
	
	return mdText.join('\n');
}

module.exports = docJsonToMd;