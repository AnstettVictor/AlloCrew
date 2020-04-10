const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: process.env.ASSET_PATH,
    path: path.join(__dirname, './dist'),
    filename: './js/main-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
              publicPath: '../',
              useRelativePaths: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/assets/index-template.html',
      favicon:'./src/assets/images/favicon.png'
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name]-[hash].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};