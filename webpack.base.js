const path = require('path')
module.exports = {
    devtool: "source-map",
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }

                },
            },
        ],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx'],
    },
    mode: 'development',
};