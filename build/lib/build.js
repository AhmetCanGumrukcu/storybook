import 'colors';
import { exec } from './exec';
import fsp from 'fs-promise';
import { buildWithWebpack } from './buildBabel';
var fs = require('fs'), path = require('path');

function buildWorkflow(libRoot, srcRoot, componentName, componentEntry, ignoredFiles) {
	fs.exists(path.join(srcRoot,'assets','images'), (exists) => {
      if(!exists){
      		fs.mkdir(path.join(srcRoot,'assets','images'));
      };
});

    return fsp.mkdirs(libRoot)  
        .then(() => buildWithWebpack(libRoot, componentName, componentEntry, ignoredFiles))
        .then(() => fsp.copy(path.join(srcRoot,'assets','images'), path.join(libRoot,'assets','images')));
}

export default function BuildCommonJs(componentRoot, componentName, componentEntry, ignoredFiles) {    
    var pkgRoot = path.join(componentRoot, 'package');
    return buildWorkflow(pkgRoot, componentRoot, componentName, componentEntry, ignoredFiles);
}