module.exports = {
  mode: "none",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          plugins: [["@babel/plugin-transform-react-jsx"]],
        },
      },
    ],
  },
};
