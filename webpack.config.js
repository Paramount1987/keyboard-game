const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: "body"
    })
]

if(isProd) {
    plugins.push(new UglifyJsPlugin())
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        hot: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: plugins
};