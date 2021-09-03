const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devtool = process.env.NODE_ENV === 'production' ? false : 'inline-source-map';

module.exports = {
  entry: {
    index: './src/index.ts'
  },
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
  devtool: devtool,
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    library: 'miniProgramRC',
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, devtool ? 'weapp/lib' : 'dist'),
    umdNamedDefine: true,
    globalObject: 'this'
  }
};
