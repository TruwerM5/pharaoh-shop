import { u as useProductsStore, _ as __nuxt_component_0 } from "./products.store-DFtulFYh.js";
import { _ as _export_sfc, g as _imports_0$2, h as useCartStore, f as useRoute, u as useHead, a as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "@vue/devtools-api";
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
        _push(`<div class="product-images__buttons" data-v-82593ba7><button class="product-images__btn product-images__btn_prev" data-v-82593ba7><img${ssrRenderAttr("src", _imports_0$1)} alt="Назад" class="product-images__icon" data-v-82593ba7></button><button class="product-images__btn product-images__btn_next" data-v-82593ba7><img${ssrRenderAttr("src", _imports_1)} alt="Вперед" class="product-images__icon" data-v-82593ba7></button></div>`);
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
      }, _attrs))} data-v-7ecd532d><span class="${ssrRenderClass(["add-to-cart-btn__inner", { "clicked": unref(isClicked) }])}" data-v-7ecd532d><span class="${ssrRenderClass(["add-to-cart-btn__block"])}" data-v-7ecd532d><img class="add-to-cart-btn__icon"${ssrRenderAttr("src", _imports_0$2)} alt="Добавить в корзину" data-v-7ecd532d><span class="add-to-cart-btn__text" data-v-7ecd532d>Добавить</span></span></span><span class="${ssrRenderClass(["add-to-cart-btn__check", { "clicked": unref(isClicked) }])}" data-v-7ecd532d><img${ssrRenderAttr("src", "/images/check-icon.svg")} alt="Checked" class="add-to-cart-btn__check-icon" data-v-7ecd532d></span></button>`);
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
      errorMsg.value = "Товар не найден.";
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
              _push2(`<img class="go-back-btn__icon"${ssrRenderAttr("src", _imports_0)} alt="Назад" data-v-af51f698${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "go-back-btn__icon",
                  src: _imports_0,
                  alt: "Назад"
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
        _push(`</div><div class="product-info__bottom" data-v-af51f698><span class="block product-info__name" data-v-af51f698>${ssrInterpolate(unref(product).name)}</span><span class="block product-info__price" data-v-af51f698>${ssrInterpolate(unref(product).price)}р. </span><div class="product-info__colors" data-v-af51f698><span class="product-info__color" data-v-af51f698>Цвет: </span><!--[-->`);
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
          _push(`<!--[--> Без размера <!--]-->`);
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
export {
  _id_ as default
};
//# sourceMappingURL=_id_-DyPxzOXR.js.map
