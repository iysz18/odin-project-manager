 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: "./src/template.html",
       title: 'Production',
     }),
   ],
   module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }
    ],
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };