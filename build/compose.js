import 'colors'
import lib from './lib/build'
import baseComp from './lib/base'
import fsp from 'fs-promise'
import mdDocCompiler from './docs/mddoc'
import packageGenerator from './package/build'
import themeBuilder from './themes/build'
import dtsGenerator from './lib/dts_generator'
import initDependecyMap from './lib/init-dependency-map.js'
import yargs from 'yargs'

var exec = require('./lib/exec').default.exec;
var spawn = require('./lib/exec').default.spawn;
var fs = require('fs'), path = require('path');
const componentsRoot = path.resolve('components');
const themesRoot = path.join(componentsRoot, 'themes');
const appRoot = path.resolve(__dirname);

export const cmpOptions = yargs
  .option('fullBuild', {describe: "Full Component Build", type:"boolean", default:false})
  .option('concurrentPromise', {describe: "Thread count for concurrent processing", type:"number", default:5})
  .option('components', {
      default: undefined,
      type: 'string'
  })
  .argv;

function fileExists(filePath)
{
    console.log("filepath : "+filePath);

    try
    {
        return fs.statSync(filePath).isFile();
    }
    catch (err)
    {
        return false;
    }
}

function startPackaging(componentRoot) {
    console.log(`========= packaging STARTED : ${componentRoot} =========`);
    var pkgRoot = path.join(componentRoot, 'package');
    var distpath = path.join(componentRoot, 'package', 'dist', 'js'); 
    var componententry = path.join(componentRoot, 'index.js');
    var componentname = path.basename(componentRoot).toLowerCase().replace(/\s/g, '-');
    var infopath = path.join(componentRoot, "assets","data", "info.json");
    var ignoredFilesObj = require(infopath).dependencies;
    var ignoredFiles = '';
    if(ignoredFilesObj){
        ignoredFiles = Object.keys(ignoredFilesObj);
    }
    return spawn('rimraf',  [pkgRoot],  {"title":`rimraf : ${pkgRoot}`})
    .then(() => lib(componentRoot, componentname, componententry, ignoredFiles))
    .then(() => dtsGenerator(componentRoot))
    .then(() => mdDocCompiler(componentRoot))
    .then(() => packageGenerator(componentRoot))
    .then(() => fsp.copy(pkgRoot, path.join(appRoot, '../node_modules', componentname)))
    .then(() => console.log('Built: '.cyan + 'npm module'.green))
}

function startBasePackaging(baseRoot) {
    var pkgRoot = path.join(baseRoot, 'package');
    return exec(`rimraf ${pkgRoot}`)
    .then(() => baseComp(pkgRoot, baseRoot))
    .then(() => mdDocCompiler(baseRoot))
    .then(() => console.log('Built: '.cyan + 'npm module'.green));
}

function runpromise(promises,number,threadcount){
    if(number==promises.length){
        return;
    }
    var nextPromise =number;
    var prmsarray=[];
    for(var i=0;i<threadcount;i++){
       if(number+i<promises.length) {
           prmsarray.push(startPackaging(promises[number+i]))
           nextPromise++;
        }
    }
    return  Promise.all(prmsarray).then(() =>  runpromise(promises ,nextPromise,threadcount)  );   
}

export default function Build(options) {
    var promises = [];    
    if (cmpOptions.components) {
        let dependencyMap = initDependecyMap();
        var namesArr = cmpOptions.components.split(",").map(function(value) {return value.toLowerCase();});
        for(var i= 0; i < namesArr.length; i++) {
            promises.push(path.dirname(dependencyMap[namesArr[i]].path));
        }
        if(promises.length>0){ 
           return runpromise(promises,0,cmpOptions.concurrentPromise); 
        } 
    } else if(cmpOptions.base) {
        var baseDirectory = path.join(componentsRoot, 'tcellcomponent');
        promises.push(startBasePackaging(baseDirectory));
    }
    else if(cmpOptions.theme){
        promises.push(themeBuilder(themesRoot));
    }
    else if(cmpOptions.fullBuild) {       
        let dependencyMap = initDependecyMap();
        let namesArr = Object.keys(dependencyMap).filter(key => key != 'tcellcomponent');
        for(var i= 0; i < namesArr.length; i++) {
            promises.push(path.dirname(dependencyMap[namesArr[i]].path));
        }
        if(promises.length>0){ 
           return runpromise(promises,0,cmpOptions.concurrentPromise); 
        }
    }
    return Promise.all(promises).catch(
        err => {
            if(err.stack) {
                console.error(err.stack.red);
            } else {
                console.error(err.toString().red);
            }
        }
    ); 
}