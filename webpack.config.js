const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '/'),
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: "json-loader",
                type: "javascript/auto"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.css'
        ]
    }
};