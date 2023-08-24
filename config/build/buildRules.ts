import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"


export function buildRules ({isDev}: BuildOptions): webpack.RuleSetRule[]{
  const sassLoader = buildCssLoader(isDev)
  
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