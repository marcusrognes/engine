var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
	devtool: 'eval',
	entry: {
		main: './game/start.js'
	},
	output: {
		path: 'build',
		publicPath: '/',
		filename: './js/[name].[hash:6].js'
	},
	externals: {
		'jsdom': 'window'
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		loaders: [,
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.js$|\.jsx$|\.scss$|\.css/,
				exclude: /(node_modules|bower_components)/,
				loader: 'react-hot-loader/webpack'
			},
			{
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.wav$|\.mp3$\.otf$\.eot$\.svg$\.ttf$\.woff$\.woff2$/,
				loader: "file?name=assets/[name].[hash:6].[ext]"
			},
			{
				test: /\.css$|\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: 'src/favicon', to: 'favicon'}
		]),
		new ExtractTextPlugin('css/[name].[hash:6].css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			title: 'Effekten av siva',
			template: 'index.html',
			filename: 'index.html',
			files: {
				chunks: {
					main: {
						entry: '/js/[name].[hash:6].js',
						css: ['/css/[name].[hash:6].css']
					},
				}
			}
		})
	]
};
