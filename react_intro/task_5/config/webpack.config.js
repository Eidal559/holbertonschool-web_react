const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },

          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            type: "asset",
          },

          {
            test: /\.(jsx|js)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        ],
    },

    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 8564,
      hot: true
    },

    plugins: [
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
        }),
        new CleanWebpackPlugin(),
    ],
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development'
}