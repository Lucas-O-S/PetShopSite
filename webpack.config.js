const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',

    entry: path.join(__dirname, 'src', 'main.js'),

    output : {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        liveReload: true,
    },

    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        favicon: path.resolve("src", "assets/svg", "Moon Stars.svg")
    })]

}
