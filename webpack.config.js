const path = require('path');
//plugins
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,  
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: 'asset/resource'
      }
    ]
  },
  plugins: [ 
    new HTMLWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin(),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      historyApiFallback: true,
      open: true,
    }
}