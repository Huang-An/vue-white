const path = require('path');
const dev = require('../config/dev');

exports.errorOverlay = function () {
    if (dev.errorOverlay) {
        return {
            warnings: false,
            errors: true
        };
    }
    return false;
};

exports.alias = {
    'vue$': 'vue/dist/vue.esm.js',
    src: path.resolve(__dirname, '../src'),
    packages: path.resolve(__dirname, '../packages'),
    example: path.resolve(__dirname, '../example'),
    white: path.resolve(__dirname, '../')
};
