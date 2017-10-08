﻿import _ from 'lodash';
import fsp from 'fs-promise';
var fs = require('fs'), path = require('path');
var exec = require('../lib/exec').default.exec;

function startPackaging(themeRoot) {
    var pkgRoot = path.join(themeRoot, 'package');
    var themeentry = path.join(themeRoot, 'index.js');
    var themename = path.basename(themeRoot).toLowerCase().replace(/\s/g, '-');
    return exec(`rimraf ${pkgRoot}`)
    .then(() => exec(`node ./node_modules/webpack/bin/webpack --config webpack-transform.config.js --env.componententry="${themeentry}" --env.componentname=${themename} --env.distpath="${pkgRoot}" --bail`))
    .then(() => packageGenerator(themeRoot))
    .then(() => console.log('Built: '.cyan + 'npm module'.green));
}

function packageGenerator(themeRoot ) {
    let cwdPackageRoot = process.cwd();
    const npmPath = path.join(themeRoot,'package','package.json');
    const pkgJsonPath = path.join(cwdPackageRoot,'build','themes','info.json');
    const licensePath = path.join(cwdPackageRoot,'build','package','LICENSE');
    const cmpJsonPath = path.join(themeRoot,'info.json');
    var pkgJson = fs.existsSync(pkgJsonPath) ? require(pkgJsonPath) : {};
    var cmpJson = fs.existsSync(cmpJsonPath) ? require(cmpJsonPath) : {};
    var target = _.extend({}, cmpJson, pkgJson);
    var data = JSON.stringify(target, null, 4);
    return fsp.writeFile(npmPath, data)
            .then(() => fsp.copy(licensePath, path.join(themeRoot,'package','LICENSE')));
}

function getDirectories(srcpath, promises) {
    var directories = fs.readdirSync(srcpath).filter(function(file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });   
    directories.forEach(function(directory) {
        var possibleTheme = path.join(srcpath, directory);
        promises.push(startPackaging(possibleTheme));
    });
}

export default function Build(themesRoot) {
    var promises = [];
    getDirectories(themesRoot, promises);
    return Promise.all(promises);
}