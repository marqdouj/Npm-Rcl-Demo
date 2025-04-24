const path = require('path');

module.exports = {
    entry: './dist/index.js',
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'npm-rcl-demo.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ],
    }
};