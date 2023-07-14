const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const dotenv = require('dotenv');

const environment = process.env.TARGET_ENV;
const isProduction = environment === 'production' || environment === 'staging';

const envFile = dotenv.config({ path: path.join(__dirname, `.env.${environment}`) });
const envObj = envFile.parsed;
const envKeys = Object.keys(envObj).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envObj[next]);
    return prev;
}, {});


module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4000
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            exclude: /node-modules/
        }]
    },
    mode: isProduction ? 'production' : 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            ...envKeys,
            'process.env.NODE_ENV': JSON.stringify(environment),
        }),
    ]
}