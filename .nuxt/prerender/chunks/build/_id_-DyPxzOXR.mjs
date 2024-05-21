import { u as useProductsStore, _ as __nuxt_component_0 } from './products.store-DFtulFYh.mjs';
import { _ as _export_sfc, g as _imports_0$3, h as useCartStore, f as useRoute, u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/h3/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/radix3/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/defu/dist/defu.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/devalue/index.js';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/destr/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/klona/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/scule/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/pathe/dist/index.mjs';

const _imports_0$1 = publicAssetsURL("/images/chevron-prev.svg");
const _imports_1 = publicAssetsURL("/images/chevron-next.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductImageVue",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    const currentIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "images-wrapper" }, _attrs))} data-v-82593ba7><div class="product-images" data-v-82593ba7><div class="product-images__content" style="${ssrRenderStyle({ transform: `translateX(${-unref(currentIndex) * 100}%)` })}" data-v-82593ba7><!--[-->`);
      ssrRenderList(_ctx.images, (image, i) => {
        _push(`<div class="product-images__item" data-v-82593ba7><img class="product-images__image"${ssrRenderAttr("src", `/images/${image}`)}${ssrRenderAttr("alt", `Product${i + 1}`)} data-v-82593ba7></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (_ctx.images.length > 1) {
        _push(`<div class="product-images__buttons" data-v-82593ba7><button class="product-images__btn product-images__btn_prev" data-v-82593ba7><img${ssrRenderAttr("src", _imports_0$1)} alt="\u041D\u0430\u0437\u0430\u0434" class="product-images__icon" data-v-82593ba7></button><button class="product-images__btn product-images__btn_next" data-v-82593ba7><img${ssrRenderAttr("src", _imports_1)} alt="\u0412\u043F\u0435\u0440\u0435\u0434" class="product-images__icon" data-v-82593ba7></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductImageVue.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-82593ba7"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddToCartBtnVue",
  __ssrInlineRender: true,
  setup(__props) {
    const isClicked = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["add-to-cart-btn", { "clicked": unref(isClicked) }]
      }, _attrs))} data-v-7ecd532d><span class="${ssrRenderClass(["add-to-cart-btn__inner", { "clicked": unref(isClicked) }])}" data-v-7ecd532d><span class="${ssrRenderClass(["add-to-cart-btn__block"])}" data-v-7ecd532d><img class="add-to-cart-btn__icon"${ssrRenderAttr("src", _imports_0$3)} alt="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" data-v-7ecd532d><span class="add-to-cart-btn__text" data-v-7ecd532d>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</span></span></span><span class="${ssrRenderClass(["add-to-cart-btn__check", { "clicked": unref(isClicked) }])}" data-v-7ecd532d><img${ssrRenderAttr("src", "/images/check-icon.svg")} alt="Checked" class="add-to-cart-btn__check-icon" data-v-7ecd532d></span></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddToCartBtnVue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7ecd532d"]]);
const _imports_0 = publicAssetsURL("/images/arrow-icon.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const ProductStore = useProductsStore();
    const CartStore = useCartStore();
    const route = useRoute();
    const errorMsg = ref("");
    const currentSizeIndex = ref();
    function setSizeIndex(sizeIndex) {
      currentSizeIndex.value = sizeIndex;
    }
    function fetchProductById(id) {
      return ProductStore.getById(Number(id));
    }
    const product = ref(fetchProductById(route.params.id));
    if (!product.value) {
      errorMsg.value = "\u0422\u043E\u0432\u0430\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.";
    } else {
      useHead({
        title: product.value.name
      });
      if (product.value.sizes) {
        setSizeIndex(0);
      }
    }
    function addToCart() {
      let size = void 0;
      if (product.value) {
        if (product.value.sizes && currentSizeIndex.value != void 0) {
          size = product.value.sizes[currentSizeIndex.value];
        } else {
          size = void 0;
        }
        CartStore.addToCart(product.value, size, 1);
        console.log("Size: ", size);
        console.log("Added product", product.value);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AlertVue = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ProductImageVue = __nuxt_component_2;
      const _component_AddToCartBtnVue = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-details page" }, _attrs))} data-v-af51f698>`);
      if (unref(errorMsg)) {
        _push(`<div class="error" data-v-af51f698>`);
        _push(ssrRenderComponent(_component_AlertVue, null, {
          message: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="error__text" data-v-af51f698${_scopeId}>${ssrInterpolate(unref(errorMsg))}</span>`);
            } else {
              return [
                createVNode("span", { class: "error__text" }, toDisplayString(unref(errorMsg)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (unref(product)) {
        _push(`<div class="product-details__inner" data-v-af51f698>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: "/categories", query: { category: unref(product).category } },
          class: "go-back-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="go-back-btn__icon"${ssrRenderAttr("src", _imports_0)} alt="\u041D\u0430\u0437\u0430\u0434" data-v-af51f698${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "go-back-btn__icon",
                  src: _imports_0,
                  alt: "\u041D\u0430\u0437\u0430\u0434"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="product-info px-[30px]" data-v-af51f698><div class="carousel" data-v-af51f698>`);
        _push(ssrRenderComponent(_component_ProductImageVue, {
          images: unref(product).images
        }, null, _parent));
        _push(`</div><div class="product-info__bottom" data-v-af51f698><span class="block product-info__name" data-v-af51f698>${ssrInterpolate(unref(product).name)}</span><span class="block product-info__price" data-v-af51f698>${ssrInterpolate(unref(product).price)}\u0440. </span><div class="product-info__colors" data-v-af51f698><span class="product-info__color" data-v-af51f698>\u0426\u0432\u0435\u0442: </span><!--[-->`);
        ssrRenderList(unref(product).colors, (color, i) => {
          _push(`<span class="product-info__color" data-v-af51f698>${ssrInterpolate(color)}</span>`);
        });
        _push(`<!--]--></div></div><div class="sizes" data-v-af51f698>`);
        if (unref(product).sizes) {
          _push(`<!--[-->`);
          ssrRenderList(unref(product).sizes, (size, i) => {
            _push(`<button class="${ssrRenderClass(["sizes__btn", { "selected": unref(currentSizeIndex) == i }])}" data-v-af51f698><span class="sizes__text" data-v-af51f698>${ssrInterpolate(size)}</span></button>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!--[--> \u0411\u0435\u0437 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 <!--]-->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_AddToCartBtnVue, {
          onClick: addToCart,
          class: "mt-[20px]"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af51f698"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DyPxzOXR.mjs.map
