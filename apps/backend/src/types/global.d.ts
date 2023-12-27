/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnvironment {
    readonly NODE_ENV: 'development' | 'testing' | 'production'
  }
}
