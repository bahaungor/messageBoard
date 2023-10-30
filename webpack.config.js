const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";

const frontend = {
  entry: './src/assets/js/index.js',
  devtool: 'inline-source-map', //Simplfy tracking down errors
  output: {
    filename: 'main.js', // Output name of JS bundles
    path: path.resolve(__dirname, 'dist/client'), //Output dir
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets/images/favicon.ico", 
          to: "favicon.ico"
        }
      ],
    }),
  ].concat(devMode ? [] : [new MiniCssExtractPlugin({ filename: "style.min.css" })]),
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
}

const backend = {
  entry: './src/app.js',
  devtool: 'inline-source-map', //Simplfy tracking down errors
  output: {
    filename: 'server.js', // Output name of JS bundles
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  target: 'node',
  plugins: [
    new NodemonPlugin(), // Nodemon plugin for hot reloading
  ],
};

module.exports = [
  Object.assign({} , frontend),
  Object.assign({} , backend)
];