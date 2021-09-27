#!/usr/bin/env node
const { build } = require("estrella")

build({
  entry: "src/index.js",
  outfile: "build/test.js",
  bundle: true,
})
