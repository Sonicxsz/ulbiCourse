import HTMLWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"
import { BuildOptions } from "./types/config"

export function buildPlugin ({path, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

  return [
    new HTMLWebpackPlugin({
      template: path.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8]",
      chunkFilename: "css/[name].[contenthash:8]",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
  ]
} 