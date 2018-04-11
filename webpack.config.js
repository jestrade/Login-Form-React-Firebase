const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        filename:'./src/js/app.jsx'
    },
    output: {
        filename: './public/js/app.js'
    },
    module: {
        loaders: [
            { 
                test: /\.jsx$/, 
                loaders: ['react-hot', 'jsx', 'babel'], 
                exclude: /node_modules/ 
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader']
            },
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				loaders: ['url-loader','file-loader']
			}
        ]
       },
    plugins: [
        new CleanWebpackPlugin(['./public'], {
          exclude: ['index.html','image']
        }),		
		new Dotenv({
		  path: './.env', 
		  safe: false 
		})
    ],
    watch: true
};