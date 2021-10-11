const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'test.js',
        path: path.join(__dirname, 'build')
    }
};