
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
    'index.csr.html': {size: 7252, hash: '92bdbd33f9a3ea6e8046d66b09413a32f232b8342697b0ce069eb2f4478b5bfe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7307, hash: 'a3344a08f0c9e8924ee41c5e82811a89663478ffd032de235c7bcc85e236f5eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26526, hash: 'f9a7185fde5e33eca1a84b547ae07e6fbce57752ec1315ca428642691934f4dc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R6X6WWSU.css': {size: 540, hash: 'XE993wYb5Po', text: () => import('./assets-chunks/styles-R6X6WWSU_css.mjs').then(m => m.default)}
  },
};
