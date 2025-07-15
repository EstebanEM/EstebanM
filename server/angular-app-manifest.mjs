
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/EstebanM/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/EstebanM"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7665, hash: 'c85cbfabb3d119f400961a490baca3c19e4b786fcb153773b4b234a82366ab08', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7720, hash: '39d4e4d42163d390ac7e0c322b644eca007da57566ab3b1105b353e0f6fddbf3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35842, hash: '097d38b15f7c1ccf1481d8a6e1045220aa0b37a7bae2be92acc3f77184e50de3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R6X6WWSU.css': {size: 540, hash: 'XE993wYb5Po', text: () => import('./assets-chunks/styles-R6X6WWSU_css.mjs').then(m => m.default)}
  },
};
