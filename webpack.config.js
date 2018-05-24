const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: path.resolve(__dirname, "app/client-entry.js")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /(\.js$)|(\.vue$)/,
        loader: "eslint-loader",
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
          publicPath: 'images/',
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: {
          loader: "url-loader"
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "app"),
    watchContentBase: true
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    // new HtmlWebpackPlugin({
    //   favicon: 'app/favicon.ico'
    // })
  ]
};

module.exports = config;
