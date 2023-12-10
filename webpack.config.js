const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    //take data from src/index.js
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    //save date in a folder in dist folder
    path: path.resolve(__dirname, "dist"),
    //here it will load the name of path in entry name=bundle
    filename: "[name][contenthash].js",
    //by this only one bundle file will be generated
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  //create a source map for better debugging
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    //it means we can run by npm run dev
    open: true,
    //we can reload
    hot: true,
    //it is bydefault compressed
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //create a copy of image
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
