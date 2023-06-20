const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'js/[name].min.js',
    path: path.resolve(__dirname, '../assets')
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]',
        },
      },
    ],
  },
  plugins:[
    new MiniCssExtractPlugin ({
      filename: 'css/[name].min.css'
    }),
    new BrowserSyncWebpackPlugin ({
      host: 'localhost',
      port: 3000,
      proxy: 'http://dev.susuki_vitara_total/'
    },
    {
      reload: true
    })
  ]
}