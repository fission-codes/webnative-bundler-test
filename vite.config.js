export default {
  optimizeDeps: {
    esbuildOptions: {
      define: {
        "global": "globalThis",
        "globalThis.process.env.NODE_ENV": "production",
      },
      target: "es2020"
    }
  },
  build: {
    target: "es2020"
  },
}