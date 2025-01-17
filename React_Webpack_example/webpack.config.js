const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  experiments: {
    outputModule: true, // Cho phép Webpack tạo file ESM
    topLevelAwait: true, // Cho phép `await import()`
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    environment: {
      module: true, // Bật hỗ trợ EcmaScript Module
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
  },
};
