const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js", // Основной файл JS
  output: {
    path: path.resolve(__dirname, "dist"), // Куда собираем файлы
    filename: "js/bundle.js",
    clean: true, // Очищает папку dist перед сборкой
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Базовый HTML
      filename: "index.html", // Копируем в dist
    }),
    new MiniCssExtractPlugin({
      filename: "style.css", // Стили попадают в dist
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Генерируем CSS-файл
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Отдаем файлы из dist
    },
    port: 3000,
    open: true, // Автоматически открывать браузер
    historyApiFallback: true,
  },
};
