var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: './js/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /(node_modules|bower_components)/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };