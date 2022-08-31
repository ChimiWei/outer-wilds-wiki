const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')


  
module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundler.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html"
    }),
    new webpack.ProvidePlugin({
        React: 'react' // ReactJS module name in node_modules folder
      })
    ],
    devServer: {
        historyApiFallback: true,
      },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              } 
            
        ]
    }
}