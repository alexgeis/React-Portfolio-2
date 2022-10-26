const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = {
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		publicPath: "/",
		filename: "bundle.js",
		path: path.resolve(__dirname, "build/"),
		clean: true,
	},
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						// presets: ["@babel/preset-react"],
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),

		new ProvidePlugin({
			React: "react",
		}),
	],
};
