module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: ["@babel/polyfill", "./src/script.js"],
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};