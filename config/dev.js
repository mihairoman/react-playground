module.exports = function(env) {
    return {
        devtool: 'cheap-module-source-map',
        output: {
            path: path.join(__dirname, '/../src/assets'),
            filename: '[name].bundle.js',
            publicPath: publicPath,
            sourceMapFilename: '[name].map'
        },
        devServer: {
            port: 3000,
            host: 'localhost',
            historyApiFallback: true,
            noInfo: false,
            stats: 'minimal',
            publicPath: publicPath
        }
    }
}
