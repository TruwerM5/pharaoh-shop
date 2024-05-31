import { _ as __nuxt_component_0 } from './ScrollVue-BlQuY-y9.mjs';
import { _ as __nuxt_component_1 } from './ProductsList-CBXOf5oj.mjs';
import { _ as _export_sfc, f as useRoute } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/index.mjs';
import { onBeforeRouteUpdate } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/server-renderer/index.mjs';
import { u as useProductsStore } from './products.store-Dwn87NyR.mjs';
import './AlertVue-DHCyWgva.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/h3/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/devalue/index.js';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/ssr/dist/index.mjs';
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
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unctx/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "categoriesw",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const ProductsStore = useProductsStore();
    const data = ref([]);
    const translatedQuery = ref(ProductsStore.checkQueryString(route.query));
    if (!route.query.category) {
      data.value = ProductsStore.products;
    } else {
      data.value = ProductsStore.products.filter((item) => {
        if (route.query.category) {
          return item.category == route.query.category;
        } else
          return false;
      });
    }
    onBeforeRouteUpdate((to, from) => {
      if (!to.query.category) {
        data.value = ProductsStore.products;
      } else {
        data.value = ProductsStore.products.filter((item) => {
          if (to.query.category) {
            return item.category == to.query.category;
          } else
            return false;
        });
        translatedQuery.value = ProductsStore.checkQueryString(to.query);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScrollVue = __nuxt_component_0;
      const _component_ProductsList = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "categories page" }, _attrs))} data-v-50d5dea6>`);
      if (unref(data).length > 0) {
        _push(`<div class="categories__nav" data-v-50d5dea6><h1 class="categories__title page-title" data-v-50d5dea6>${ssrInterpolate(unref(translatedQuery))}</h1></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ScrollVue, null, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ProductsList, { products: unref(data) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ProductsList, { products: unref(data) }, null, 8, ["products"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categoriesw.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const categoriesw = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50d5dea6"]]);

export { categoriesw as default };
//# sourceMappingURL=categoriesw-B8tO0GpY.mjs.map
