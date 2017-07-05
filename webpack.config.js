const webpack = require('webpack');
const path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var cssnano = require('cssnano');
var CompressionPlugin = require('compression-webpack-plugin');
var HTMLCompressionPlugin = require("html-compression-webpack-plugin");


module.exports = {
  entry:{
    app:['./public/src/index.js'],
    vendor:[
      'history',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk',
      'lodash',
      'jquery'
    ]
  },
  output: {
    path: __dirname+'/public/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react','stage-0'],
           plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
       {
        test:/\.css$/,
         exclude: /node_modules/,
         loader:ExtractTextPlugin.extract({
         fallback:'style-loader',
         loader:'css-loader!sass-loader'
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf?(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" },
      { test: /\.eot?(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" },
      { test: /\.svg?(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "url-loader?limit=100000" },
      { test: /\.bmp$/, loader: "url-loader?limit=100000" },
      { test: /\.gif$/, loader: "url-loader?limit=100000" },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ]
  },
  resolve: {
    extensions: [".web.coffee", ".web.js", ".coffee", ".js",".jsx"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new ExtractTextPlugin({filename:'stylebundle.css'}),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/g,
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.bundle.js'}),
  ],
  watch:true,
  node:{
    net:'empty',
    dns:'empty'
  }
}

