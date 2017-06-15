const BabiliPlugin = require("babili-webpack-plugin");
module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  plugins:[
    new BabiliPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  devServer: {
    inline:true,
    port: 1234,
    contentBase: './public',
  },
}