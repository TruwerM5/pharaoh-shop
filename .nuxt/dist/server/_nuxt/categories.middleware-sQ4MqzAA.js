import { j as defineNuxtRouteMiddleware } from "../server.mjs";
import { u as useProductsStore } from "./products.store-v9-VJaLJ.js";
import "vue";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "vue/server-renderer";
const ProductsStore = useProductsStore();
const categories_middleware = defineNuxtRouteMiddleware((to, from) => {
  setTimeout(() => {
    if (to.query) {
      ProductsStore.setFilters(to.params.category, to.query);
      ProductsStore.currentProducts = ProductsStore.filteredProducts;
    } else {
      ProductsStore.currentProducts = ProductsStore.products.filter((item) => {
        return item.category == to.params.category;
      });
    }
    ProductsStore.setFilters(to.params.category, to.query);
  }, 400);
});
export {
  categories_middleware as default
};
//# sourceMappingURL=categories.middleware-sQ4MqzAA.js.map
