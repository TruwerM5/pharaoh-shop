import { _ as _imports_0$2, a as __nuxt_component_0 } from "./virtual_public-Bw0j0hWT.js";
import { defineComponent, ref, unref, mergeProps, useSSRContext, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { h as defineStore, _ as _export_sfc, i as _imports_0$3, e as useCartStore, g as useRoute, u as useHead, a as __nuxt_component_0$1 } from "../server.mjs";
import { u as useProductsStore } from "./products.store-v9-VJaLJ.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "@vue/devtools-api";
const useImagesStore = defineStore("useImagesStore", {
  state: () => ({
    currentIndex: 0,
    isGalleryOpened: false
  }),
  actions: {
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
    openGallery() {
      this.isGalleryOpened = true;
    },
    closeGallery() {
      this.isGalleryOpened = false;
    }
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProductImageBigVue",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    const ImagesStore = useImagesStore();
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(ImagesStore).isGalleryOpened) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "images-details" }, _attrs))} data-v-81dc3a7b><div class="images-details__inner snap-x snap-mandatory" data-v-81dc3a7b><ul class="images-details__list" data-v-81dc3a7b><!--[-->`);
        ssrRenderList(_ctx.images, (image, i) => {
          _push(`<li class="images-details__item snap-center block min-h-full"${ssrRenderAttr("data-index", i)} data-v-81dc3a7b><img${ssrRenderAttr("src", `/images/${image}`)}${ssrRenderAttr("alt", `${image}`)} class="images-details__image" data-v-81dc3a7b></li>`);
        });
        _push(`<!--]--></ul></div><div class="images-details__buttons" data-v-81dc3a7b><!--[-->`);
        ssrRenderList(_ctx.images, (icon, i) => {
          _push(`<button class="${ssrRenderClass(["images-details__btn"])}"${ssrRenderAttr("data-index", i)} data-v-81dc3a7b><img${ssrRenderAttr("src", `/images/${icon}`)}${ssrRenderAttr("alt", `${i}`)} class="images-details__btn-icon" data-v-81dc3a7b></button>`);
        });
        _push(`<!--]--></div><button class="images-details__close-btn" data-v-81dc3a7b><img${ssrRenderAttr("src", _imports_0$2)} alt="Закрыть" class="images-details__icon" data-v-81dc3a7b></button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductImageBigVue.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-81dc3a7b"]]);
const _imports_0$1 = publicAssetsURL("/images/chevron-prev.svg");
const _imports_1 = publicAssetsURL("/images/chevron-next.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductImageVue",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    const ImagesStore = useImagesStore();
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "images-wrapper" }, _attrs))} data-v-204d8e91><div class="product-images" data-v-204d8e91><div class="product-images__content" style="${ssrRenderStyle({ transform: `translateX(${-unref(ImagesStore).currentIndex * 100}%)` })}" data-v-204d8e91><!--[-->`);
      ssrRenderList(_ctx.images, (image, i) => {
        _push(`<div class="product-images__item" data-v-204d8e91><img class="product-images__image"${ssrRenderAttr("src", `/images/${image}`)}${ssrRenderAttr("alt", `Product${i + 1}`)} data-v-204d8e91></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (_ctx.images.length > 1) {
        _push(`<div class="product-images__buttons" data-v-204d8e91><button class="product-images__btn product-images__btn_prev" data-v-204d8e91><img${ssrRenderAttr("src", _imports_0$1)} alt="Назад" class="product-images__icon" data-v-204d8e91></button><button class="product-images__btn product-images__btn_next" data-v-204d8e91><img${ssrRenderAttr("src", _imports_1)} alt="Вперед" class="product-images__icon" data-v-204d8e91></button></div>`);
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-204d8e91"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddToCartBtnVue",
  __ssrInlineRender: true,
  setup(__props) {
    const isClicked = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["add-to-cart-btn primary-button", { "clicked": unref(isClicked) }]
      }, _attrs))} data-v-ed3a4c05><span class="add-to-cart-btn__wrapper" data-v-ed3a4c05><span class="${ssrRenderClass(["add-to-cart-btn__inner", { "clicked": unref(isClicked) }])}" data-v-ed3a4c05><span class="${ssrRenderClass(["add-to-cart-btn__block"])}" data-v-ed3a4c05><img class="add-to-cart-btn__icon"${ssrRenderAttr("src", _imports_0$3)} alt="Добавить в корзину" data-v-ed3a4c05><span class="add-to-cart-btn__text" data-v-ed3a4c05>В корзину</span></span></span><span class="${ssrRenderClass(["add-to-cart-btn__check", { "clicked": unref(isClicked) }])}" data-v-ed3a4c05><img${ssrRenderAttr("src", "/images/check-icon.svg")} alt="Checked" class="add-to-cart-btn__check-icon" data-v-ed3a4c05></span></span></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddToCartBtnVue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ed3a4c05"]]);
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
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AlertVue = __nuxt_component_0;
      const _component_ProductImageBigVue = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ProductImageVue = __nuxt_component_3;
      const _component_AddToCartBtnVue = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-details page" }, _attrs))} data-v-e7ab024d>`);
      if (unref(errorMsg)) {
        _push(`<div class="error" data-v-e7ab024d>`);
        _push(ssrRenderComponent(_component_AlertVue, null, {
          message: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="error__text" data-v-e7ab024d${_scopeId}>${ssrInterpolate(unref(errorMsg))}</span>`);
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
        _push(`<div class="product-details__inner" data-v-e7ab024d>`);
        _push(ssrRenderComponent(_component_ProductImageBigVue, {
          images: unref(product).images
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: `/categories/${unref(product).category}` },
          class: "go-back-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="go-back-btn__icon"${ssrRenderAttr("src", _imports_0)} alt="Назад" data-v-e7ab024d${_scopeId}>`);
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
        _push(`<div class="product-info px-[30px]" data-v-e7ab024d><div class="carousel" data-v-e7ab024d>`);
        _push(ssrRenderComponent(_component_ProductImageVue, {
          images: unref(product).images
        }, null, _parent));
        _push(`</div><div class="product-info__bottom" data-v-e7ab024d><span class="block product-info__name" data-v-e7ab024d>${ssrInterpolate(unref(product).name)}</span><span class="block product-info__price" data-v-e7ab024d>${ssrInterpolate(unref(product).price)}р. </span><div class="product-info__colors" data-v-e7ab024d><span class="product-info__color" data-v-e7ab024d>Цвет: </span><!--[-->`);
        ssrRenderList(unref(product).colors, (color, i) => {
          _push(`<span class="product-info__color" data-v-e7ab024d>${ssrInterpolate(color)}</span>`);
        });
        _push(`<!--]--></div></div><div class="sizes" data-v-e7ab024d>`);
        if (unref(product).sizes) {
          _push(`<!--[-->`);
          ssrRenderList(unref(product).sizes, (size, i) => {
            _push(`<button class="${ssrRenderClass(["sizes__btn", { "selected": unref(currentSizeIndex) == i }])}" data-v-e7ab024d><span class="sizes__text" data-v-e7ab024d>${ssrInterpolate(size)}</span></button>`);
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
        _push(`</div><div class="product-about px-[30px]" data-v-e7ab024d><span class="product-about__title" data-v-e7ab024d>О товаре</span><p class="product-about__text" data-v-e7ab024d>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab reprehenderit dolores minus beatae, aperiam voluptatem dicta in dolor, facilis et excepturi, distinctio quas debitis soluta at exercitationem labore quos.</p></div></div>`);
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e7ab024d"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CZ7cEylg.js.map
