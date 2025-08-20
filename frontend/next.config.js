const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@payload-config'] = path.resolve(__dirname, '../backend/payload.config.ts');
    return config;
  },
};
