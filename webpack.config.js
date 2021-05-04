const npmScript = process.env.npm_lifecycle_event;
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    open: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/assets/images', to: 'img' },
        { from: './src/assets/CNAME', to: './' },
        { from: './src/assets/robots.txt', to: './' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

if (npmScript === 'build:prod') {
  config.mode = 'production';
  config.output.filename = 'js/main.[hash].js';
  config.devtool = false;
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/main.[hash].css',
    })
  );
  config.module.rules[0].use[0].loader = MiniCssExtractPlugin.loader;
}

module.exports = config;
