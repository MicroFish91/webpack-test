const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  // Relative Path
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    publicPath: "public",
    filename: "bundle.js",
    // Absolute Path
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
