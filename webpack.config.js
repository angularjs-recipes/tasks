var webpack = require('webpack');

module.exports = {
    entry: './app/app.module.js',
    devtool: 'source-map',
    watch: true,
    output: {
        filename: './main.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
};
