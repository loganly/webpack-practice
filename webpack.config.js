'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'development',
  // mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
            },
          },
        ],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  // // 默认false，不开启
  // watch: true,
  // // 只有开启监听模式，watchOptions才有意义
  // watchOptions: {
  //   // 默认为空，不监听的文件或者文件夹，支持正则匹配
  //   ignored: /node_modules/,
  //   // 监听到变化后会等待300ms再去执行，默认300ms
  //   aggregateTimeout: 300,
  //   // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒询问1000次
  //   poll: 1000,
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
