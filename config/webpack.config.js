const $c = require('./c.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	mode: 'production',
    entry: {
        app: './src/index.js'
    },
    devServer: {
	        contentBase: $c.root + 'dist',
	        compress: false,
	        port: 8089,
	        inline: false
	    },
    plugins: [
    	
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            favicon : './favicon.ico'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: $c.root + 'dist'
    }
};