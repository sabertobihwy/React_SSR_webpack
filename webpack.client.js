// webpack.config.js
const path = require('path');
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const client = {
    entry: './src/app/client.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/client.[contenthash:5].js',
        publicPath: '/', // 为浏览器请求资源前缀
        assetModuleFilename: 'img/[name].[hash:5][ext]' // 搭配 Webpack 5内置 asset module
    },
    plugins: [
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*'] }),
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash:5].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true // 开启 CSS Modules：.title → .title__a1b2c
                        }

                    }],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource' // 会复制图片到 output.assetModuleFilename 指定目录，并返回其 URL
            }
        ],
    }
};
module.exports = merge(base, client)