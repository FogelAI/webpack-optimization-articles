const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  optimization: {
    usedExports: true,
    sideEffects: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        defaultVendors: false,
        src: {
          test: /[\\/]src[\\/]/,
          minSize: 0,
          priority: 100,
          name: (module, chunks) => {
            const allChunksNames = chunks.map(({ name }) => name).join(".");
            return `${allChunksNames}`;
          },
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
        <head>
          <script crossorigin src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
        </head>
        <body>
          <div id="app"></div>
        </body>
        </html>
      `,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["@babel/preset-react"]],
        },
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom/client": "ReactDOM",
  },
};
