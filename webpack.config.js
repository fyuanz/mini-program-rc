const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', 'tsx', '.js']
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'wchatMiniProgramsCanvasRender'
    })
  ],
  output: {
    library: 'miniProgramsRC',
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
