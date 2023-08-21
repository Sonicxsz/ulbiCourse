import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"

export function buildRules ({isDev}: BuildOptions): webpack.RuleSetRule[]{
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module")),
            localIdentName: isDev 
              ? "[path][name]__[local]--[hash:base64:8]" 
              : "[hash:base64:8]" 
          },
        }
      },
      "sass-loader",
    ],
  }
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader"
    }
  }
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  }

 

  return [
    sassLoader,
    svgLoader,
    babelLoader,
    tsLoader
  ]  
}