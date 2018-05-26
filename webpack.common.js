const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('vue-html-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/client-entry.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.js$)|(\.vue$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: 'css-loader',
          'scss': 'css-loader|sass-loader',
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        exclude: [/node_modules/],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'images/'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      vue: true,
      favicon: 'app/favicon.ico',
      title: 'de-boissieu.fr'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
