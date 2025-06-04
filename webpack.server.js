// webpack.config.js
const path = require('path');
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
// const nodeExternals = require('webpack-node-externals');
const createESMExternals = require('./createESMExternals')
// const externals = createESMExternals()

const server = {
    entry: './src/app/server.jsx',         // 入口是 React 的组件文件
    experiments: {
        outputModule: true // 全局特性开关。输出 ESModule（.mjs）
    },
    output: {
        module: true, // 输出 ESM
        environment: { module: true }, //  是否需要syntax downgrade：不！目标环境就是esm，不要降级
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.mjs',
        publicPath: '/',
        assetModuleFilename: 'img/[name].[hash:5][ext]' // 搭配 type: 'asset/resource'
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
                            exportOnlyLocals: true // 适合 SSR的css加载方式：只需要className mapping
                        }
                    }

                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    emit: false // img 服务端只需要知道路径
                }
            }
        ],
    }
};

module.exports = merge(base, server)


