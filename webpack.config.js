const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");  // ✅ Import this
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "images" }, // ✅ Ensure images go to dist/images/
      ],
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/Homepage/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // ✅ Ensures images are placed in dist/images/
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
