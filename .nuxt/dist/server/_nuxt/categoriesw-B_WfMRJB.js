import { _ as __nuxt_component_0 } from "./ScrollVue-gF3AqC3m.js";
import { _ as __nuxt_component_1 } from "./ProductsList-CbqsI7Kk.js";
import { g as useRoute, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useProductsStore } from "./products.store-v9-VJaLJ.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
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
export {
  categoriesw as default
};
//# sourceMappingURL=categoriesw-B_WfMRJB.js.map
