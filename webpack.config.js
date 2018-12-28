const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.jsx', '.js']
    },
    stats: {
            children: false,
    },
    entry: {
        app: './assets/react/game/src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './assets/react/game/src'),
        hot: true,
        publicPath : './assets/react/game/dist/',
        output: {
            filename: "app.js",
        },
    },
    plugins: [
        new CleanWebpackPlugin(['./assets/dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './assets/react/game/dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss/,
                use: [ 'sass-loader' ]
            }
        ]
    }
};