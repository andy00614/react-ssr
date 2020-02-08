module.exports = {
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
