/// <reference path="node_modules/webpack-dev-server/types/lib/Server.d.ts"/>
import { Configuration } from 'webpack'
import path from 'path'

const config: Configuration = {
  // 絶対パスでwebpackに取ってのルートとなるフォルダを指定する
  context: path.join(__dirname, 'src'),
  entry: './index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
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
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  // コンパイル後のjsを元のtsファイルと結びつける事でデバッグし易くする
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'static'),
    open: true,
    port: 8080,
  },
}

export default config
