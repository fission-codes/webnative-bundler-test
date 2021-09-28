__Bundler testing facility for [webnative](https://github.com/fission-suite/webnative)__.

```shell
yarn install
yarn run test
```

Bundlers:
- estrella (esbuild)
- parcel (v2)
- snowpack
- vite


Issues:
- Parcel build does not work with `npm`, but does work with `yarn` and `pnpm`. `overrides` in the `package.json` file is not supported yet by `npm`. For some reason we need this override with parcel and not with other bundlers.
