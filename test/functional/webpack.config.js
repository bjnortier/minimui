const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const opn = require('opn')

const port = 7444

module.exports = {
  mode: 'development',
  entry: {
    index: [
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].bundle.js'
  },
  devServer: {
    port,
    after: (app, server) => {
      opn(`http://localhost:${port}/`, { app: 'google chrome' })
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/env']
            }
          }
        ],
        include: [
          fs.realpathSync(path.resolve(__dirname)),
          fs.realpathSync(path.resolve(__dirname, '..', '..', 'src'))
        ]
      }
    ]
  }
}
