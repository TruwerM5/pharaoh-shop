import { _ as __nuxt_component_0 } from "./ScrollVue-BlQuY-y9.js";
import { _ as __nuxt_component_1 } from "./ProductsList-CBXOf5oj.js";
import { f as useRoute } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useProductsStore } from "./products.store-Dwn87NyR.js";
import "./AlertVue-DHCyWgva.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[category]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const ProductsStore = useProductsStore();
    const data = ref([]);
    const title = ref("qwe");
    if (!route.params.category) {
      data.value = ProductsStore.products;
    } else {
      data.value = ProductsStore.products.filter((item) => {
        return item.category == route.params.category;
      });
      title.value = ProductsStore.getCategoryTitle(route.params.category);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScrollVue = __nuxt_component_0;
      const _component_ProductsList = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "categories page" }, _attrs))}>`);
      if (unref(data).length > 0) {
        _push(`<div class="categories__nav"><h1 class="categories__title page-title">${ssrInterpolate(unref(title) ? unref(title)[1] : "")}</h1></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_category_-qMC81qnn.js.map
