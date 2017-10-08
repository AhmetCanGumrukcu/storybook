require('babel-core/register');
import _ from 'lodash';
import baseConfig from './base.config';
var nodeExternals = require('webpack-node-externals'); 

module.exports = function(env) {
  let componentname = env.componentname;
  let distpath = env.distpath;
  let entryFile = env.componententry;
  return _.extend({}, baseConfig, {
    entry: {
        index: entryFile
    },
    output: {
      path: distpath,
      filename: '[name].js',
      library: componentname,
      libraryTarget: 'umd'
    },
    externals: [nodeExternals()]
  })
}