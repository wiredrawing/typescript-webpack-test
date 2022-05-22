module.exports = {
  entry: "./src/index.js",
  mode: "development",

  // webpackされたjavascript保存先
  output: {
    // 静的ファイルのindex.htmlには script タグで以下で出力される main.jsを読み込む
    // ※例) <script src="/src/main.js"></script>
    // filename: "./src/main.js",
    // 仮に filenameプロパティの値を変更した場合は次のようなscriptタグになる
    // ※例) <script src="/main.js"></script>
    filename: "./bundle.js",
    // 個別にpathプロパティを付与すると個別に出力先ディレクトリを変更できる
    path: __dirname + "/dist"
  },

  devServer: {
    // webpack-dev-serverのルートディレクトリを指定する
    // index.htmlは以下で指定したディレクトリに配置する
    static: "public",
    open: true,
  },
};