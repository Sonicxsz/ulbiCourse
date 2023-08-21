export interface BuildOptions {
    mode: BuildMode,
    path: BuildPath,
    port: number,
    isDev: boolean
}

export type BuildMode = 'production' | 'development'

export interface BuildPath {
    entry: string,
    build: string,
    html: string,
    src: string
}

export interface BuildEnv {
    port: number
}