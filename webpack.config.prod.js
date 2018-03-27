var path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 entry: './src/index.js',
 output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cafevisthuset.bundle.js',
    sourceMapFilename: 'cafevisthuset.map'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        WEBPACK: true
      }
    }),
    new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'public', 'assets'),
				to: path.resolve(__dirname, 'dist', 'assets')
			}
		]),
    new ExtractTextPlugin('bundle.css')
  ],
  loaders: [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      },
      include: path.resolve(__dirname, 'src')
    },
    {
      test: /\.css/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader'
        ],
        include: path.resolve(__dirname, 'src')
      })
    }
  ]
};
