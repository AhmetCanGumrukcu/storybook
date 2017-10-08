import initDependecyMap from '../lib/init-dependency-map.js'
var semver = require('semver');
const exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
const componentsRoot = path.resolve('components');
var json = require('format-json');
var dependencyMap = initDependecyMap();

exec('npm view'+' '+process.argv[2]+' '+'version', (error, stdout, stderr) =>{
    if (error) {
        console.log(stdout);  
        console.error(`exec error: ${error}`);
        return;
    }
    function fileExists(filePath) {
        try {
            return fs.statSync(filePath).isFile();
        }
        catch (err){
            return false;
        }
    }

    var componentName = process.argv[2].split('/')[1];    
    var componentDir = path.dirname(dependencyMap[componentName].path);
    var targetFile = path.join(componentDir, '/assets/data/info.json');
    var packageFile = path.join(componentDir, '/package');

    fs.readFile(targetFile, 'utf8', function (err,data) {
       if (err) {
         return console.log(err);
      }  
      var content=JSON.parse(data);
      content.version=semver.inc(stdout,process.argv[3]);
      fs.writeFile(targetFile,json.plain(content), 'utf8', function (err) {
        if (err) return console.log(err);
      });    
    });     

    exec(`node ./node_modules/babel-cli/bin/babel-node build/main.js --components=${componentDir}`, (error, stdout, stderr) =>{
         if (error || stderr) {
            console.log(stdout);   
            console.error('exec error:' + error);
            console.error('stderr:' + stderr);
            return;
         } else {
            console.log(stdout);             
            exec(`npm publish ${packageFile}`, (error, stdout, stderr) =>{
                if (error) { 
                console.log(stdout);    
                console.error(`exec error: ${error}`);
                return;
                }
                console.log(stdout);
            });
        }
    });
});


 