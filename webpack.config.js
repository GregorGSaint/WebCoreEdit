const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", 

  output: {
    path: __dirname + "/dist",  
    filename: "js/bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", 
      filename: "index.html" 
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader",   
          "sass-loader"   
        ]
      },
    ]
  }
};
