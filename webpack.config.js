const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hacker News',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    modules: ['node_modules'],
  },
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
  }
};