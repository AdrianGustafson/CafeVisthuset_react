var path = require('path');
const webpack = require('webpack');

module.exports = {
 entry: './src/index.js',
 output: {
    path: path.resolve(__dirname, 'dist/'),
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
    })
  ]
}
