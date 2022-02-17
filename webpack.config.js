const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-cheap-source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hacker News',
            template: path.resolve(__dirname, 'src/index.html'),
        }),
    ],
    resolve: {
        modules: ['node_modules'],
    }
};