/// <reference path="node_modules/webpack-dev-server/types/lib/Server.d.ts"/>
import { Configuration } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: Configuration = {
  // 絶対パスでwebpackに取ってのルートとなるフォルダを指定する
  context: path.join(__dirname, 'src'),
  entry: './index.tsx',
  output: {
    path: path.join(__dirname, 'frontend'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // ts, tsxを変換対象とする
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      inject: 'body',
    }),
  ],
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  // コンパイル後のjsを元のtsファイルと結びつける事でデバッグし易くする
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'pulic'),
    open: false,
    port: 8080,
    proxy: {
      '/create-payment-intent': {
        target: 'http://localhost:4242',
        secure: false,
        logLevel: 'debug',
      },
    },
  },
}

export default config
