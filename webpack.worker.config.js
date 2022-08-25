const path = require("path")

module.exports = {
    entry: "./src/worker-importscript.js",
    mode: "development",
    target: "webworker",
    output: {
        filename: "worker-importscript.js",
        path: path.join(__dirname, "build")
    }
}