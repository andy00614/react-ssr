const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.base");

const serverConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  }
};
module.exports = merge(config, serverConfig);
