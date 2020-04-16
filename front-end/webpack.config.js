const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  resolve: {
    alias: {
      images: path.resolve(__dirname, './src/assets/images/'),
      style: path.resolve(__dirname, './src/assets/style/'),
      utils: path.resolve(__dirname, './src/assets/utils/')
    }
  },
  entry: './src/index.js',
  output: {
    publicPath: '/',
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
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
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