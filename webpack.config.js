const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const cssnext = require('postcss-cssnext')

const production = process.env.NODE_ENV === 'production';

let plugins = [
    new ExtractTextPlugin("bundle.css")
]

if (production) {
    plugins = plugins.concat([

        new CleanPlugin('./client/dist/assets'),

        // This plugin looks for similar chunks and files
        // and merges them for better caching by the user
        new webpack.optimize.DedupePlugin(),

        // This plugins optimizes chunks and modules by
        // how much they are used in your app
        new webpack.optimize.OccurenceOrderPlugin(),

        // This plugin minifies all the Javascript code of the final bundle
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false, // Suppress uglification warnings
            },
        }),

        // This plugins defines various variables that we can set to false
        // in production to avoid code related to them from being compiled
        // in our final bundle
        new webpack.DefinePlugin({
            __SERVER__: !production,
            __DEVELOPMENT__: !production,
            __DEVTOOLS__: !production,
            'process.env': {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),

    ]);
}

module.exports = {
    debug: !production,
    devtool: production ? false : 'source-map',
    entry: './client/src/js/main.js',
    output: {
        path: './client/dist/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel',
                include: __dirname + '/client/src/js/',
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
            }
        ]
    },
    postcss: [cssnext],
    plugins: plugins
}