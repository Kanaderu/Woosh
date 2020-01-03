var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
    mode:           'development',
    context:        __dirname,
    entry: {
        main: './src/index',
    },
    output: {
        path:       path.resolve('../static/js'),
        publicPath: '../static/js/',
        filename:   '[name]-[hash].js'
    },
    plugins: [
        new BundleTracker({
            path: __dirname,
            filename: './webpack-stats.json'
        }),
        new ExtractText({
            filename: '[name]-[hash].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                }]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 25000, // Convert images < 8kb to base64 strings
                        name: '[hash]-[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            }
        ],
    },

    resolve: {
        //modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
        //extensions: ['', '.js', '.jsx']
    },
}
