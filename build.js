// new import syntax
// import  CONFIG  from './config/site.config.js';

// old import syntax
const fs = require('fs');
const path = require('path');
const CONFIG = require('./config/site.config.js');
const { config } = require('process');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const ASSETS = path.join(ROOT, 'assets');
const TEMPLATES = path.join(ROOT, 'templates');

fs.copyFileSync(
    path.join(ROOT, 'index.html'),
    path.join(DIST, 'index.html')
);

fs.cpSync(
    ASSETS,
    path.join(DIST, 'assets'),
    { recursive: true }
);

generateFile({
    fileName: 'site',
    extensionType: 'webmanifest',
    config: {
        '{{NAME}}': CONFIG.name,
        '{{DOMAIN}}': CONFIG.domain,
        '{{FILE_NAME}}': CONFIG.file_name,
        '{{SHORT_NAME}}': CONFIG.short_name,
        '{{IMAGE_EXTENSION_TYPE}}': CONFIG.image_extension_type
    }
});

generateFile({
    fileName: 'robots',
    extensionType: 'txt',
    config: {
        '{{DOMAIN}}': CONFIG.domain,
    }
});

generateFile({
    fileName: 'sitemap',
    extensionType: 'xml',
    config: {
        '{{DOMAIN}}': CONFIG.domain,
    }
});

function generateFile({ fileName, extensionType, config }) {

    const entries = Object.entries(config);

    const file = fs.readFileSync(
        path.join(TEMPLATES, `${fileName}.${extensionType}`),
        'utf-8'
    );

    let result = file;

    for (let i = 0; i < entries.length; i++) {

        const [placeholder, value] = entries[i];

        result = result.replaceAll(placeholder, value);
    }

    fs.writeFileSync(
        path.join(DIST, `${fileName}.${extensionType}`),
        result,
        'utf-8'
    );
}