const path = require('path')
// const outputDirPath = path.join(__dirname, 'public', 'dist')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CSSExtract = new ExtractTextPlugin('styles.css')

module.exports = (env) => {
   const isProduction = env === 'production'
   console.log('env', env);
   return {
      entry: './src/app.js',
      output: {
         path: path.join(__dirname, 'public', 'dist'),
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
         contentBase: path.join(__dirname, 'public'),
         historyApiFallback: true,
         publicPath: '/dist/'
      }
   };
}
