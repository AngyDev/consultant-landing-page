// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

    // Path to your entry point. From this file Webpack will begin its work
    entry: './src/scripts/index.js',

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            // Apply rule for .sass, .scss or .css files
            test: /\.((c|sa|sc)ss)$/i,

            // Set loaders to transform files.
            // Loaders are applying from right to left(!)
            // The first loader will be applied after others
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
        }, {
            // Now we apply rule for images
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images'
                }
            }]
        }, {
            // Apply rule for fonts files
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [{
                // Using file-loader too
                loader: "file-loader",
                options: {
                    outputPath: 'fonts'
                }
            }]
        }]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        // Add this plugin to create a copy of the images folder from src to dist
        new CopyWebpackPlugin({
            patterns: [
                { from: "./src/images", to: "./images" }
            ]
        })

    ],

    devServer: {
        contentBase: './dist'
    },

    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on the final bundle. For now, we don't need production's JavaScript 
    // minifying and other things, so let's set mode to development
    mode: 'development'
};