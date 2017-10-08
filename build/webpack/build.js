var exec = require('../lib/exec').default.exec;

export default function BuildDistributable(componentname, componententry, distpath, ignoredFiles) {
    console.log("========= webpack compiler STARTED =========");
    if(ignoredFiles){
        return exec(`node ./node_modules/webpack/bin/webpack --env.componententry="${componententry}" --env.componentname=${componentname} --env.distpath="${distpath}" --env.ignoredFiles=${ignoredFiles} --bail`)
             .then(() => exec(`node ./node_modules/webpack/bin/webpack -p --env.componententry="${componententry}" --env.componentname=${componentname} --env.distpath="${distpath}" --env.ignoredFiles=${ignoredFiles} --bail`));
    }else {
        return exec(`node ./node_modules/webpack/bin/webpack --env.componententry="${componententry}" --env.componentname=${componentname} --env.distpath="${distpath}" --bail`)
             .then(() => exec(`node ./node_modules/webpack/bin/webpack -p --env.componententry="${componententry}" --env.componentname=${componentname} --env.distpath="${distpath}" --bail`));
    }
}