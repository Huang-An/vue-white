const path = require('path');
const components = require('./config/components');

const typeConfig = {
    // 打包成一个index.js
    common: {
        entry: {
            app: ['./src/index.js']
        },
        output: {
            path: path.resolve(process.cwd(), './lib'),
            publicPath: '/dist/',
            filename: 'white.common.js',
            chunkFilename: '[id].js',
            libraryTarget: 'commonjs2'
        }
    },
    // 分别打包各个组件
    component: {
        entry: components,
        output: {
            path: path.resolve(process.cwd(), './lib'),
            publicPath: '/dist/',
            filename: '[name].js',
            chunkFilename: '[id].js',
            libraryTarget: 'commonjs2'
        }
    }
};

exports.getTypeConfig = function (type) {
    return typeConfig[type] || {};
};
