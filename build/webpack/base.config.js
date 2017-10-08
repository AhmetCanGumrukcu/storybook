import webpack from 'webpack';
import yargs from 'yargs';
var _path = require('path');

export const options = yargs
    .alias('p', 'optimizeMinimize')
    .alias('d', 'debug')
    .argv;

const baseConfig = {
    entry: undefined,
    output: undefined,
    module: { 
        rules: [
            { 
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,     
                use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                babelrc: false, 
                                presets: ["es2015","stage-0","react"],
                                plugins: [require('babel-plugin-transform-decorators-legacy').default]
                            }
                        }
                    ]
            },
            {
              test: /\.css$/,
              use: ["style-loader","css-loader"]
            },
            {
                test: /\.(eot|svg|jpe?g|png|ttf|woff|pdf|woff2?)$/,
                exclude:/node_modules/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: '"production"', TARGET: '"web"'}
        }),
        function()
        {
            this.plugin("done", function(stats)
            {
                if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1)
                {
                    console.log(stats.compilation.errors);
                    throw new Error(stats.compilation.errors);
                }
            });
        }
    ]
};

if (options.optimizeMinimize) {
    baseConfig.devtool = 'source-map';
}
export default baseConfig;