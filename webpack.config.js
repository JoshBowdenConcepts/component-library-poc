// TODO: Add Webpack Clean Plugin - Getting Error TypeError: compiler.plugin is not a function
const path = require('path')

const prod = process.env.NODE_ENV === 'production'

module.exports = {
    node: {
        __dirname: true,
    },
    mode: prod ? 'production' : 'development',
    entry: path.join(__dirname, './src/index.ts'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: 'babel-loader',
            },
        ],
    },
    devtool: prod ? undefined : 'source-map',
}
