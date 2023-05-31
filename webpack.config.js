const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    port: 8080,
    
    proxy: {
      '/api': {
        "target": "http://localhost:3000",
        "secure": false,
        "changeOrigin": true,
    },
      '/auth': {
        "target": "http://localhost:3000",
        "secure": false,
        "changeOrigin": true,
    },
      '/scraper': {
        "target": "http://localhost:3000",
        "secure": false,
        "changeOrigin": true,
    },
    },
    static: {
      directory: path.join(__dirname, './dist'),
      publicPath: '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, './client/public'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

/*
{
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
*/