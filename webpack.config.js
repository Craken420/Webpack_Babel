const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                // use: {
                    // loader: 'babel-loader',
                    //options: { presets: [['@babel/preset-env']]}
                // }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ]
}
