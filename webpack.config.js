var path = require('path')
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/app.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-modules-typescript-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
}
