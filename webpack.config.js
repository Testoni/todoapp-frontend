const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx', // ponto de entrada
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public' // joga o arquivo app.js
    },
    resolve: {
        // resolver as extensoes
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules' // se quiser referenciar biblioteca ex: modules/bootstrap.css
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css') // qual arquivo ele quer gerar o parser a partir do css
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: '/node_modules',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}