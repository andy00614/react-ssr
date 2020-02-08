const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  mode: "development",
  target: "node", // 需要告诉webpack打包的是服务器端还是浏览器端的代码
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()], // todo: 这个好像是防止编译用的
}

module.exports = merge(config,serverConfig)
