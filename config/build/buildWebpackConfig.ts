import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildRules } from "./buildRules"
import { buildResolvers } from "./buildResolvers"
import { buildPlugin } from "./buildPlugins"
import { buildDevServer } from "./buildDevServer"


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    
  return{ 
    mode: "development",
    entry: options.path.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.path.build,
      clean: true,
    },
    plugins: buildPlugin(options),
    module: {
      rules: buildRules(options)
    },
    resolve: buildResolvers(options),
    devtool: options.isDev ? "inline-source-map" : undefined,
    devServer: buildDevServer(options)
  }
}