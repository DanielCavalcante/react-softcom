const webpack = require('webpack')
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: '[name]-[hash].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin(
      {
        title: 'Webpack App Scaffold',
        template: path.join(__dirname, 'dist', 'template.html')
      }
    )
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}