import _ from 'lodash';
import fsp from 'fs-promise';
import webpackCompiler from '../webpack/basebuild';
var wrench = require('wrench');
var fs = require('fs'), path = require('path');

function baseWorkflow(pkgRoot, baseRoot) {
    var indexPath = path.join(baseRoot, 'index.js');
    if(!fs.existsSync(pkgRoot)) {
        fs.mkdirSync(pkgRoot);
    }
    var directories = fs.readdirSync(baseRoot).filter(function(file) {
        return fs.statSync(path.join(baseRoot, file)).isDirectory();
    });
    directories.forEach(function(directory) {
        if(directory !== 'package' && directory !== 'doc' && directory !== 'docs') {
            wrench.copyDirSyncRecursive(
                path.join(baseRoot,directory), 
                path.join(pkgRoot,directory), {
                    forceDelete: true,
                    exclude: /test|(\.ts|\.tsx|\.jsx)|docs|doc|package|data/g
                });
        }
    });
    let cwdPackageRoot = process.cwd();
    const npmPath = path.join(pkgRoot,'package.json');
    const pkgJsonPath = path.join(cwdPackageRoot,'build','package','baseinfo.json');
    const licensePath = path.join(cwdPackageRoot,'build','package','LICENSE');
    var pkgJson = fs.existsSync(pkgJsonPath) ? require(pkgJsonPath) : {};
    var target = _.extend({}, pkgJson);
    var data = JSON.stringify(target, null, 4);
    return fsp.writeFile(npmPath, data)
            .then(() => fsp.copy(licensePath, path.join(pkgRoot,'LICENSE')))
            .then(() => webpackCompiler('tcellcomponent', indexPath, pkgRoot,''))
            .then(() => fsp.copy(pkgRoot, path.join(cwdPackageRoot, 'node_modules','tcellcomponent')))
}

export default function BaseCompiler(pkgRoot, baseRoot) {
    return baseWorkflow(pkgRoot, baseRoot);
}