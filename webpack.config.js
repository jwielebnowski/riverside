'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['babel-polyfill',
        'react-hot-loader/patch', 
        path.join(__dirname, 'app/index.js')],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false
    },
   devServer: {
      historyApiFallback: {
        disableDotRule: true
      },
      contentBase: path.join(__dirname, '/dist'),
      publicPath: '/',
      inline: false
    },    
    module: {
        rules:[
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader', options: {sourceMap: true}},
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
              }
            }
          ]
        }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-react-jsx', 'react-css-modules', 'transform-object-rest-spread'],
              sourceMaps: true,
              retainLines: true
            }
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' },
            {
              test: /\.css$/,
              loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
            }            
        ]
    }
};
