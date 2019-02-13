const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf');
const getTypeConfig = require('./webpack.type.conf').getTypeConfig;
const webpackCommon = merge(getTypeConfig('common'), webpackBaseConf);

module.exports = webpackCommon;
