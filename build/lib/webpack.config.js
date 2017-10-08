import _ from 'lodash';
import baseConfig, { options } from '../webpack/base.config';
var nodeExternals = require('webpack-node-externals');

module.exports = function(env) {
    return _.extend({}, baseConfig, {
        entry: {
            index: env.componententry
        },
        output: {
            path: env.distpath,
            filename: '[name].js',
            library: env.componentname,
            libraryTarget: 'umd'
        },
        externals: [nodeExternals()]
    });
}
