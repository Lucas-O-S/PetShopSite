const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackplugin = require('copy-webpack-plugin');

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

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            favicon: path.resolve("src", "assets/svg", "Moon Stars.svg")
        }),

        new CopyWebpackplugin({
            patterns:[
                {
                    from: path.resolve(__dirname, 'src', 'assets/svg'),
                    to: path.resolve(__dirname, 'dist', 'assets/svg')
                },
                {
                    from: path.resolve(__dirname, 'src', 'assets/img'),
                    to: path.resolve(__dirname, 'dist', 'assets/img')
                },
                {
                    from: path.resolve(__dirname, 'src', 'pages'),
                    to: path.resolve(__dirname, 'dist', 'pages')
                }

            
            ]
        })
    ],

    module: {
        rules: 
        [
            {
                "test": /\.css$/,
                use : ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    }

}
