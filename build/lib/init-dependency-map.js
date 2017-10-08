var path = require('path');
var fs = require('fs');
var Glob = require('glob').Glob;

function _findComponentPath(infoFilePath, componentName)
{
    var temp = '/'+ componentName + '/'
    var endPos = infoFilePath.indexOf(temp) + temp.length;
    var componentFilePath = path.resolve(infoFilePath.substring(0, endPos) + 'index.js');
    if(fs.existsSync(componentFilePath))
    {
        return componentFilePath;
    } 
    console.log (`${componentName} path cannot be found !!!!!`);
    return;
}

function _addComponentDependencies2Map(info, infoFilePath, dependencyMap)
{
    //read infoFilePath and find dependencies.
    var dependencies = Object.keys(info.dependencies);
    var currentComponentName = info.name.split('/').pop();
    var currentComponent = {
        "name" : currentComponentName,
        "path" : _findComponentPath(infoFilePath, currentComponentName)
    };

    //traverse dependencies and updateDependency map.
    if(dependencies) {
        dependencies.forEach( function(dependency) {
            var dependencyComponentName = dependency.split('/').pop();
            //ignore other dependencies and if it depends itself...
            if(!dependency.startsWith('t-') || dependencyComponentName==currentComponentName) return;            
            //add a new object to the map for the current dependency if it's not already available.
            if(!dependencyMap[dependencyComponentName]) {
                dependencyMap[dependencyComponentName] = 
                {
                    "path" : undefined,
                    "dependents":[]
                }
            }
            //check whether info.json owner component added as a dependent or not previously and if not add. 
            var pos = dependencyMap[dependencyComponentName].dependents.map(x => x.name).indexOf(currentComponent.name)
            if(pos == -1)
            {
                dependencyMap[dependencyComponentName].dependents.push(currentComponent);
            }
        });
    } 
}

export default function initializeComponentDependencyMap() {
    var dependencyMap = {}
    var pattern = "{./components/**/data/info.json, !./components/**/package/**/data/info.json}"
    var match = new Glob(pattern, {mark:true, sync:true});
    var infoFiles = match.found.filter(infoPath => infoPath.indexOf('/package/') == -1);
    infoFiles.forEach( function(infoPath) {    
        try {     
            var info = JSON.parse(fs.readFileSync(infoPath, 'utf-8'));
            var componentName = info.name.split('/').pop();
            var componentInfo = {
                 "path" : _findComponentPath(infoPath, componentName),
                 "dependents": []                
            };
            if(!dependencyMap[componentName]) {
                dependencyMap [componentName] = componentInfo
            } else if(!dependencyMap[componentName].path) {
                //component might be available at the map but its path might not have been set at first init.
                dependencyMap[componentName].path = _findComponentPath(infoPath, componentName)
            }
            _addComponentDependencies2Map(info, infoPath, dependencyMap);
        } catch(err) {}
    });
    return dependencyMap;
}