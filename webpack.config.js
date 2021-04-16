const npmScript = process.env.npm_lifecycle_event;
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    open: true,
    // hot: true
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({
      filename: 'css/main.[hash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/images', to: 'img' },
        { from: './src/work', to: 'work' },
      ],
    }),
    // new CleanWebpackPlugin(),
  ],
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
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
    ],
  },
};

if (npmScript === 'build') {
  config.mode = 'production';
  config.devtool = false;
}

module.exports = config;
