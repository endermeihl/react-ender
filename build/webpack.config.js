const path = require('path');
const rootPath = path.resolve(__dirname, '..');
const src = path.join(rootPath, 'src');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const commonPath = {
    rootPath: rootPath,
    dist: path.join(rootPath, 'dist'), // build 后输出目录
    indexHTML: path.join(src, 'index.html'), // 入口基页
    staticDir: path.join(rootPath, 'static') // 无需处理的静态资源目录
};

module.exports = {
    entry: path.join(src, 'index.js'),//已多次提及的唯一入口文件
    output: {
        path: path.join(commonPath.dist, ''),
        publicPath: "/dist/",
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },
    devServer: {
        contentBase: path.resolve(rootPath, 'dist'),
        host: '0.0.0.0',
        port: 8086,
        disableHostCheck: true
        },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: path.join(src, 'index.html'),
            chunksSortMode: 'none'//new 一个这个插件的实例，并传入相关的参数
        })
    ],
};