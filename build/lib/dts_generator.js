import path from 'path'
import fs from 'fs'
import { generateFromFile } from 'react-to-typescript-definitions'

export default function DtsGenerator(cmpRoot) {
    var cmpname = path.basename(cmpRoot).toLowerCase().replace(/\s/g, '-');
    var dts = generateFromFile(cmpname, path.join(cmpRoot, 'index.js'));
    dts = `import { Component } from 'react'
    ${dts}`
    return new Promise(function (resolve, reject) {
        fs.writeFile(path.join(cmpRoot, 'package', 'index.d.ts'), dts, (err) => {
            if(err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}