import { j as defineNuxtRouteMiddleware } from './server.mjs';
import { u as useProductsStore } from './products.store-v9-VJaLJ.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/h3/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/destr/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/klona/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/scule/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/defu/dist/defu.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/pathe/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/cookie-es/dist/index.mjs';

const ProductsStore = useProductsStore();
const categories_middleware = defineNuxtRouteMiddleware((to, from) => {
  if (to.query) {
    ProductsStore.setFilters(to.params.category, to.query);
    ProductsStore.currentProducts = ProductsStore.filteredProducts;
  } else {
    ProductsStore.currentProducts = ProductsStore.products.filter((item) => {
      return item.category == to.params.category;
    });
  }
  ProductsStore.setFilters(to.params.category, to.query);
});

export { categories_middleware as default };
//# sourceMappingURL=categories.middleware-BkF6vmrq.mjs.map
