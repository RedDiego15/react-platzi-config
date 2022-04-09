/** @type {import('webpack').Configuration} */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true,
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: 'development',
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(jpg|png|jpeg|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css',
    }),

    //new BundleAnalyzerPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    static: './dist',
    compress: true,
    port: 3000,
  },
};
