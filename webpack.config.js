module.exports = {
  // ...
  mode: "none",

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // other rules...
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
};
