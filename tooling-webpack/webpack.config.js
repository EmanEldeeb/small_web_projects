const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, ""),
    },
  },
};
