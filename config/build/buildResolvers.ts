import { BuildOptions } from "./types/config"
import { ResolveOptions } from "webpack"

export function buildResolvers(options:BuildOptions ): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.path.src, "node_modules"]
  }
}