/** @type {import('webpack').Configuration} */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@logos': path.resolve(__dirname, './assets/logos'),
      '@icons': path.resolve(__dirname, './assets/icons'),
      '@components': path.resolve(__dirname, './src/components'),
      '@containers': path.resolve(__dirname, './src/Containers'),
      '@responsiveComponents': path.resolve(
        __dirname,
        './src/ResponsiveComponents'
      ),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@hooks': path.resolve(__dirname, './src/Hooks'),
      '@context': path.resolve(__dirname, './src/Context'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
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
        test: /\.(scss|csss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
};
