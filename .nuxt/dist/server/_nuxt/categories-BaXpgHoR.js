import { _ as __nuxt_component_0$2, u as useProductsStore } from "./products.store-DFtulFYh.js";
import { a as __nuxt_component_0$1, _ as _export_sfc, e as useNavStore, f as useRoute } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { onBeforeRouteUpdate } from "vue-router";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "ufo";
import "radix3";
import "@vue/devtools-api";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductsItemVue",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "product-item" }, _attrs))} data-v-a213cf66><fieldset class="product-item__inner" data-v-a213cf66>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { path: `/products/${_ctx.product.id}` }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `/images/${_ctx.product.images[0]}`)}${ssrRenderAttr("alt", _ctx.product.name)} class="product-item__image" data-v-a213cf66${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: `/images/${_ctx.product.images[0]}`,
                alt: _ctx.product.name,
                class: "product-item__image"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<figcaption class="product-item__info" data-v-a213cf66><span class="product-item__price" data-v-a213cf66>${ssrInterpolate(_ctx.product.price)} ₽ </span><span class="product-item__name" data-v-a213cf66>${ssrInterpolate(_ctx.product.name)}</span></figcaption></fieldset></li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/ProductsItemVue.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a213cf66"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductsList",
  __ssrInlineRender: true,
  props: {
    products: {}
  },
  setup(__props) {
    useNavStore();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AlertVue = __nuxt_component_0$2;
      const _component_ProductsItemVue = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-list" }, _attrs))} data-v-d3459cdf>`);
      if (!_ctx.products.length) {
        _push(ssrRenderComponent(_component_AlertVue, null, {
          message: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="alert-message text-[16px] test-rose-500" data-v-d3459cdf${_scopeId}> Извините, по вашему запросу ничего найдено. </span>`);
            } else {
              return [
                createVNode("span", { class: "alert-message text-[16px] test-rose-500" }, " Извините, по вашему запросу ничего найдено. ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<ul class="products-list__inner" data-v-d3459cdf><!--[-->`);
        ssrRenderList(_ctx.products, (item) => {
          _push(ssrRenderComponent(_component_ProductsItemVue, {
            key: item.id,
            product: item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/ProductsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d3459cdf"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "categories",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const ProductsStore = useProductsStore();
    const data = ref([]);
    if (!route.query.category) {
      console.log("No query");
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
      }
    });
    console.log(data.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductsList = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-page page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ProductsList, { products: unref(data) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=categories-BaXpgHoR.js.map
