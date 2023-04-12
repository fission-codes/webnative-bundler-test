const path = require("path")

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        filename: "test.js",
        path: path.join(__dirname, "build")
    },
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false
    }
}