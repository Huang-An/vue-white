const path = require('path');

module.exports = {
    // 打包后的路径dist文件夹
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 资源路径
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    host: '0.0.0.0',
    port: 7070,
    // 是否自动开启浏览器
    autoOpenBrowser: true,
    // 是否显示错误提示蒙层
    errorOverlay: true,
    // 是否显示Eslint错误提示蒙层
    showEslintErrorsInOverlay: true
};
