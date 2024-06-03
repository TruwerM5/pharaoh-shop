import { a as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductsItemVue",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "product-item" }, _attrs))} data-v-c625d47f><fieldset class="product-item__inner" data-v-c625d47f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { path: `/products/${_ctx.product.id}` },
        class: "product-item__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `/images/${_ctx.product.images[0]}`)}${ssrRenderAttr("alt", _ctx.product.name)} class="product-item__image" data-v-c625d47f${_scopeId}><span class="product-item__price" data-v-c625d47f${_scopeId}>${ssrInterpolate(_ctx.product.price)} ₽ </span>`);
          } else {
            return [
              createVNode("img", {
                src: `/images/${_ctx.product.images[0]}`,
                alt: _ctx.product.name,
                class: "product-item__image"
              }, null, 8, ["src", "alt"]),
              createVNode("span", { class: "product-item__price" }, toDisplayString(_ctx.product.price) + " ₽ ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<figcaption class="product-item__info" data-v-c625d47f><span class="product-item__name" data-v-c625d47f>${ssrInterpolate(_ctx.product.name)}</span></figcaption></fieldset></li>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/ProductsItemVue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c625d47f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductsList",
  __ssrInlineRender: true,
  props: {
    products: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductsItemVue = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-list" }, _attrs))} data-v-2b565348><ul class="products-list__inner" data-v-2b565348><!--[-->`);
      ssrRenderList(_ctx.products, (item) => {
        _push(ssrRenderComponent(_component_ProductsItemVue, {
          key: item.id,
          product: item
        }, null, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/ProductsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b565348"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=ProductsList-CbqsI7Kk.js.map
