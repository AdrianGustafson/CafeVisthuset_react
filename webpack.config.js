var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path    = require('path');
var publicPath = '/public/assets/';

var BUILD_DIR = path.resolve(__dirname, 'public/assets/');
var APP_DIR   = path.join(__dirname, 'src');

var config = {
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: BUILD_DIR,
    filename: 'cafevisthuset.bundle.js',
    sourceMapFilename: 'cafevisthuset.map'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    contentBase: 'public',
    hot: true
  }
};

module.exports = config;
