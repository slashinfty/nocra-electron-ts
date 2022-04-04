const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './src/react.tsx',
        target: 'web',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    include: /src/,
                    use: ['ts-loader']
                },
                {
                    test: /\.css$/,
                    include: /src/,
                    use: ['css-loader']
                }
            ]
        },
        output: {
            path: './build',
            filename: 'react.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devServer: {
            static: __dirname + '/build',
            port: 9000
        }
    }
];