var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractText = require('extract-text-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:           'development',
    context:        __dirname,
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './src/index',
    ],
    output: {
        path:       path.resolve('../static/js'),
        pathinfo:   true,
        filename:   '[name]-[hash].js',
        //publicPath: '/static/js/',
        publicPath: 'http://localhost:3000/',
    },
    plugins: [
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            //inject: true,
            template: 'public/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.js$/,
                include: /node_modules\/react-lifecycles-compat/,
                use: ['babel-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules\/react-dom/,
                use: {
                    loader: 'react-hot-loader/webpack',
                    options: {
                        noRegister: true,
                    },
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
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
    },
}
