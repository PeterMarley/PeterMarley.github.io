/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   use: 'asset/resource',
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
      },
      // {
      //   test: /\.ttf$/,
      //   loader: 'file-loader',
      //   options: {
      //     outputPath: 'fonts',
      //   }
      // },
    ],
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = config;
