let path = require('path')
let nodeExternals = require('webpack-node-externals')
let { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  plugins: [new VueLoaderPlugin],
  resolve: {
    //添加了这些扩展名后,项目中打包如下的扩展名文件就不需要编写文件的后缀
    extensions: ['.js', '.json', '.wasm', '.jsx', '.vue']
  },
  externals: [nodeExternals()]
}
