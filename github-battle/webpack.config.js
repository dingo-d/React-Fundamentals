var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputCss = 'styles/[name].css';

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
    { test: /\.(js)$/, use: 'babel-loader' },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      })
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: 'app/index.html'
  }),
    new ExtractTextPlugin(outputCss)
]
}