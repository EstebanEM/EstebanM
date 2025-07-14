
export default {
  basePath: 'https://EstebanEM.github.io/EstebanM',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
