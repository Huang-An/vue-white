const path = require('path');
const dev = require('../config/dev');

const resolve = function (dir) {
    return path.join(__dirname, '..', dir);
};

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
    src: path.resolve(__dirname, '../src'),
    packages: path.resolve(__dirname, '../packages'),
    example: path.resolve(__dirname, '../example'),
    white: path.resolve(__dirname, '../')
};

exports.createLintingRule = function () {
    return {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('example')],
        options: {
            formatter: require('eslint-friendly-formatter'),
            emitWarning: !dev.showEslintErrorsInOverlay
        }
    };
};
