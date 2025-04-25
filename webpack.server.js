// webpack.config.js
const path = require('path');
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const nodeExternals = require('webpack-node-externals');
const createESMExternals = require('./createESMExternals')
// const externals = createESMExternals()

const server = {
    entry: './src/server/index.jsx',         // 入口是 React 的组件文件
    experiments: {
        outputModule: true
    },
    output: {
        module: true,
        environment: { module: true },
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.mjs',          // 输出给 server 用
        publicPath: '/', // 为浏览器请求资源前缀
        assetModuleFilename: 'img/[name].[hash:5][ext]' // ✅ 决定资源的物理路径和 URL
    },
    target: 'node',                        // 这是 SSR 必须的，告诉 webpack 打包给 Node 用
    externals: [createESMExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            exportOnlyLocals: true
                        }
                    }

                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    emit: false
                }
            }
        ],
    }
};

module.exports = merge(base, server)


