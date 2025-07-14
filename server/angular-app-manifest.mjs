
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://EstebanEM.github.io/EstebanM/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/EstebanM"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7279, hash: 'e324e2c97bf0e1e3b9322b43260fd261174af323c6d688d44d49d925f3d4fee1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7334, hash: 'f28d50973d40871f1e9153495bb553522ab898078d747ae7ed3f77cc9a0904e8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26553, hash: '1a1b3787ce722ec6f2c55a9d2f48672db6a2630ff50ee10ab6862bd119e59365', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R6X6WWSU.css': {size: 540, hash: 'XE993wYb5Po', text: () => import('./assets-chunks/styles-R6X6WWSU_css.mjs').then(m => m.default)}
  },
};
