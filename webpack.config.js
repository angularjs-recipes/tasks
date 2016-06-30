var webpack = require('webpack');

module.exports = {
    entry: './app/app.module.js',
    devtool: 'source-map',
    output: {
        filename: './main.js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /(\.css$)/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            loader: "style!css!sass"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    }
};
