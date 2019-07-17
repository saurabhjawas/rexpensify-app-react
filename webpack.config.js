const path = require('path')
const publicDirPath = path.join(__dirname, './public')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CSSExtract = new ExtractTextPlugin('styles.css')

module.exports = (env) => {
   const isProduction = env === 'production'
   console.log('env', env);
   return {
      entry: './src/app.js',
      output: {
         path: publicDirPath,
         filename: 'bundle.js'
      },
      module: {
         rules: [
            {
               loader: 'babel-loader',
               test: /\.js$/,
               exclude: /node_modules/
            },
            {
               test: /\.s?css$/,
               use: CSSExtract.extract({
                  use: [
                     // 'style-loader',
                     {
                        loader: 'css-loader',
                        options: {
                           sourceMap: true
                        }
                     },
                     {
                        loader: 'sass-loader',
                        options: {
                           sourceMap: true
                        }
                     }
                  ]
               })
            }
         ]
      },
      plugins: [
         CSSExtract
      ],
      devtool: isProduction ? 'source-map' : 'inline-source-map',
      devServer: {
         contentBase: publicDirPath,
         historyApiFallback: true
      }
   };
}
