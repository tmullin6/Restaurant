const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',

    entry: {
        
        index: './src/index.js',
        menu: './src/menu.js',
        contact: './src/contact.js'
    
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
        })
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};