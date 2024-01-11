const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development', // Use 'production' when building for production
    entry: path.resolve(__dirname, 'src/main.js'), // Your entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // Where to output the build files
        filename: 'bundle.js' // The name of the bundled js file
    },
    resolve: {
        alias: {
            // Resolve the `@` alias to the src directory
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.vue', '.json'] // Automatically resolve these extensions
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', // You'll need to install babel-loader and @babel/core
                exclude: /node_modules/ // Don't transpile node_modules
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', // Adds CSS to the DOM by injecting a <style> tag
                    'css-loader' // Interprets @import and url() like import/require() and will resolve them
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader', // You'll need to install file-loader
                        options: {
                            esModule: false, // Required for vue-loader < v15
                            name: '[name].[ext]',
                            outputPath: 'images/', // Where to put images
                            publicPath: 'images/' // Where to reference images from in the html
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'), // Path to your index.html
            inject: true,
        }),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8080,
    },
};
