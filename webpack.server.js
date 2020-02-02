const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node", // 需要告诉webpack打包的是服务器端还是浏览器端的代码
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()], // todo: 这个好像是防止编译用的
  module: {
    // 配置规则
    rules: [
      {
        test: /\.js?$/,
        // test: /\.(js|jsx|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            // "@babel/preset-stage-0", //babel7以后就不需要它了，用env来代替它
            [
              "@babel/env",
              {
                targets: {
                  browsers: ["last 2 versions"] // 兼容主流浏览器的最后两个版本
                },
                useBuiltIns: "usage"
              }
            ]
          ]
        }
      }
    ]
  }
};
