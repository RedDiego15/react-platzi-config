/** @type {import('webpack').Configuration} */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');

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
        extensions: ['.mjs', '.js', '.jsx', '.json'],
        alias: {
            '@containers': path.join(__dirname, './src/containers'),
            '@components': path.join(__dirname, './src/components'),
            '@routes': path.join(__dirname, './src/routes'),
            '@styles': path.join(__dirname, './src/styles'),
            '@hooks': path.join(__dirname, './src/hooks'),
            '@context': path.join(__dirname, './src/context'),
        },
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

        new BundleAnalyzerPlugin(),
        new Dotenv(),
    ],
    devServer: {
        historyApiFallback: true,
        static: './dist',
        compress: true,
        port: 3000,
    },
};
