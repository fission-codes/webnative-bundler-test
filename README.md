__Bundler testing facility for [webnative](https://github.com/fission-suite/webnative)__.

```shell
yarn install
yarn run test
```

**Build target:**
```
es2020
```

Supported bundlers:
- estrella (esbuild)
- vite
- webpack

Not supported:
- parcel (doesn't support `exports` map, https://github.com/parcel-bundler/parcel/issues/4155)
