const fs = require('fs');
const path = require('path');
const axios = require('axios');

const ERP2_API_URL = 'http://localhost:8005';
const ERP2_API_VERSION = 'v1';

const client = axios.create({
    baseURL: `${ERP2_API_URL}/api/${ERP2_API_VERSION}`,
    timeout: 20000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
});

const resourcesFolder = './dist';

const {
    name,
    description = '',
    version = '0'
} = require('./package.json');

const baseURL = `https://cdn.jsdelivr.net/gh/perezmaz/test1@${version}/dist`;

const manifest = {
    name,
    description,
    version,
    type: 'JS_SINGLE_PAGE',
    manifest: `${baseURL}/manifest.json`,
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

const sendManifest = async (manifest) => {
    const request = {
        data: manifest,
    };

    try {
        const response = await client.post('/applications', request);
        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        return {
            status: error.response.status,
            error: error.response.data,
        };
    }
}

readFolder(resourcesFolder, '');

fs.writeFileSync(`${resourcesFolder}/manifest.json`, JSON.stringify(manifest));

sendManifest(manifest).then(({ data = 'No data', error = 'No errors', status }) => {
    console.log(status, data, error);
});

