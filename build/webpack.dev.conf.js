const utils = require('./utils');
const webpack = require('webpack');
const dev = require('./config/dev');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devWebpackConfig = {
    mode: 'development',
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './example/entry/index.js'
    },
    output: {
        path: dev.assetsRoot,
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: utils.alias
    },
    module: {
        rules: [
            utils.createLintingRule(),
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    // cheap-module-eval-source-map is faster for development
    devtool: 'cheap-module-eval-source-map',
    // these devServer options should be customized in /config/main.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/,
                    to: path.posix.join(dev.assetsPublicPath, 'index.html')
                }
            ]
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: dev.host,
        port: dev.port,
        open: dev.autoOpenBrowser,
        overlay: utils.errorOverlay(),
        publicPath: dev.assetsPublicPath,
        quiet: true // necessary for FriendlyErrorsPlugin
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../example/public/index.html'),
            inject: true
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../example/public/static'),
                to: dev.assetsSubDirectory,
                ignore: ['.*']
            }
        ]),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: 'static/css/[name].[contenthash].css',
            allChunks: true
        }),
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
};

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = dev.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port;
            // add port to devServer config
            devWebpackConfig.devServer.port = port;

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`]
                }
            }));

            resolve(devWebpackConfig);
        }
    });
});
