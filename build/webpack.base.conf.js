const path = require('path');
const utils = require('./utils');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodeExternals = require('webpack-node-externals');
const components = require('./config/components');

// externals
const externals = {
    vue: 'vue'
};

Object.keys(components).forEach(key => {
    externals[`white/packages/${key}`] = `white/lib/${key}`;
});

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: utils.alias,
        modules: ['node_modules']
    },
    externals: [externals, nodeExternals()],
    performance: {
        hints: false
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
};
