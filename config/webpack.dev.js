var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

var ENV = process.env.NODE_ENV = process.env.ENV = 'development';
var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || 'localhost';
var DEV_TOOLS = process.env.DEV_TOOLS || true;

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts$/,
                loader: 'tslint-loader',
                exclude: /(node_modules)/
            }
        ]
    },

    plugins: [
        new StyleLintPlugin({
            configFile: helpers.root('.stylelintrc'),
            files: '**/*.scss',
            syntax: 'scss'
        }),

        new ExtractTextPlugin('[name].css'),

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'DEV_TOOLS': DEV_TOOLS
            }
        })
    ],

    devServer: {
        port: parseInt(PORT, 10),
        host: HOST,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        stats: 'minimal'
    }
});
