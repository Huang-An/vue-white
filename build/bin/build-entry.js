const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;
const render = require('json-templater/string');
const upperCamelcase = require('uppercamelcase');
const template = require('../config/template');
const components = require('../config/components');

// 版本信息
const version = process.env.VERSION || require('../../package.json').version;
// 输出文件路径
const OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
// import模板
const IMPORT_TEMPLATE = template.IMPORT_TEMPLATE;
// install模板
const INSTALL_COMPONENT_TEMPLATE = template.INSTALL_COMPONENT_TEMPLATE;
// 主要代码模板
const MAIN_TEMPLATE = template.MAIN_TEMPLATE;

const importTemplate = [];
const installTemplate = [];
const listTemplate = [];

Object.keys(components).forEach(name => {
    const componentName = upperCamelcase(name);

    importTemplate.push(render(IMPORT_TEMPLATE, {
        name: componentName,
        package: name
    }));

    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
        name: componentName,
    }));

    listTemplate.push(`${componentName}`);
});

const code = render(MAIN_TEMPLATE, {
    include: importTemplate.join(endOfLine),
    install: installTemplate.join(',' + endOfLine),
    version: version,
    list: listTemplate.join(',' + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, code);
console.log('[build entry] DONE:', OUTPUT_PATH);
