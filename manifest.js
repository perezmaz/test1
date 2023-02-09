const fs = require('fs');
const path = require('path');

const resourcesFolder = './dist';
const baseURL = 'https://raw.githubusercontent.com/perezmaz/test1/master/dist';
const {
    name,
    description = '',
    version = '0'
} = require('./package.json');

const manifest = {
    name,
    description,
    version,
    type: 'JS_SINGLE_PAGE',
    resources: {
        js: [],
        css: [],
    },
}


const readFolder = (folderPath, nestedFolder) => {
    fs.readdirSync(folderPath).forEach(file => {
        if (!file.includes('.')) {
            readFolder(`${folderPath}/${file}`, `/${file}`);
        } else {
            if (path.extname(file) === '.js') {
                manifest.resources.js = [
                    ...manifest.resources.js,
                    {
                        url: `${baseURL}${nestedFolder}/${file}`,
                    }
                ];
            }
            if (path.extname(file) === '.css') {
                manifest.resources.css = [
                    ...manifest.resources.css,
                    {
                        url: `${baseURL}${nestedFolder}/${file}`,
                    }
                ];
            }
        }
    });
}

readFolder(resourcesFolder, '');

fs.writeFileSync(`${resourcesFolder}/manifest.json`, JSON.stringify(manifest));
