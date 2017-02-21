const {resolve} = require('path');
const webpack = require('webpack');
const ip = require('ip');

const serverIp = ip.address();

module.exports = {
  cache: true,
  entry: {
    app: [
      `webpack-hot-middleware/client?path=http://${serverIp}:8080/__webpack_hmr`,

      './index.js'
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    // the output bundle

    path: resolve(__dirname, 'build'),

    publicPath: `http://${serverIp}:8080/build/`
  },

  context: resolve(__dirname, 'src/browser'),

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin()
  ]
};
