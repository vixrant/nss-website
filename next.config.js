const withCSS = require('@zeit/next-css');
const { parsed } = require('dotenv').config();

module.exports = withCSS({
    cssModules: 0,
    assetPrefix: parsed.NODE_ENV !== 'dev' ? "/nss/" : "",
    env: {
        BASE_DIR: parsed.BASE_DIR || '',
    }
})
