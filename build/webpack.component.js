const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf');
const getTypeConfig = require('./webpack.type.conf').getTypeConfig;

const webpackComponent = merge(getTypeConfig('component'), webpackBaseConf);

module.exports = webpackComponent;
