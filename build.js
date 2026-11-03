// new import syntax
// import  CONFIG  from './config/site.config.js';

// old import syntax
const fs = require('fs');
const path = require('path');
const CONFIG = require('./config/site.config.js');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const ASSETS = path.join(ROOT, 'assets');
const TEMPLATES = path.join(ROOT, 'templates');

fs.cpSync(
    ASSETS,
    path.join(DIST, 'assets'),
    { recursive: true }
);

generateFile({
    isRoot: false,
    fileName: 'robots',
    extensionType: 'txt',
    siteConfig: {
        '{{DOMAIN}}': CONFIG.domain,
    }
});

generateFile({
    isRoot: false,
    fileName: 'sitemap',
    extensionType: 'xml',
    siteConfig: {
        '{{DOMAIN}}': CONFIG.domain,
    }
});

generateFile({
    isRoot: true,
    fileName: 'index',
    extensionType: 'html',
    siteConfig: {
        '{{NAME}}': CONFIG.name,
        '{{DOMAIN}}': CONFIG.domain,
        '{{FILE_NAME}}': CONFIG.file_name,
        '{{IMAGE_EXTENSION_TYPE}}': CONFIG.image_extension_type
    }
});

generateFile({
    isRoot: false,
    fileName: 'site',
    extensionType: 'webmanifest',
    siteConfig: {
        '{{NAME}}': CONFIG.name,
        '{{DOMAIN}}': CONFIG.domain,
        '{{FILE_NAME}}': CONFIG.file_name,
        '{{SHORT_NAME}}': CONFIG.short_name,
        '{{IMAGE_EXTENSION_TYPE}}': CONFIG.image_extension_type
    }
});

function generateFile({ isRoot, fileName, extensionType, siteConfig }) {

    const entries = Object.entries(siteConfig);

    const file = fs.readFileSync(
        path.join(isRoot ? ROOT : TEMPLATES, `${fileName}.${extensionType}`),
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