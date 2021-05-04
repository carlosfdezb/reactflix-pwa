const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Reactflix',
      short_name: 'Reactflix',
      orientation: 'any',
      description: 'Ve tus películas favoritas',
      background_color: '#100F10',
      start_url: '/',
      theme_color: '#100F10',
      icons: [
        {
          src: path.resolve(__dirname, 'src/assets/img/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('Icons'),
          ios: true,
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 50000000,
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://cuevana-api-carlosfdezb.vercel.app/api/v1/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
