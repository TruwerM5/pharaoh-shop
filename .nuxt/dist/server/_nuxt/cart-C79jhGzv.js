import { _ as __nuxt_component_0$2 } from "./AlertVue-DHCyWgva.js";
import { _ as __nuxt_component_0$3 } from "./ScrollVue-CgiT8ynq.js";
import { e as useCartStore, a as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_0$1 } from "./virtual_public-BtRi2QFo.js";
import "ofetch";
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
const _imports_0 = publicAssetsURL("/images/minus-icon.svg");
const _imports_1 = publicAssetsURL("/images/plus-icon.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CartItemVue",
  __ssrInlineRender: true,
  props: {
    cartproduct: {}
  },
  setup(__props) {
    useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "product" }, _attrs))} data-v-30c10b10><div class="product__content" data-v-30c10b10>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { path: `/products/${_ctx.cartproduct.id}` },
        class: "product__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `/images/${_ctx.cartproduct.images[0]}`)}${ssrRenderAttr("alt", _ctx.cartproduct.name)} class="product__image" data-v-30c10b10${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: `/images/${_ctx.cartproduct.images[0]}`,
                alt: _ctx.cartproduct.name,
                class: "product__image"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="product__info" data-v-30c10b10><span class="product__name block" data-v-30c10b10>${ssrInterpolate(_ctx.cartproduct.name)}</span><span class="product__size block" data-v-30c10b10>Размер: <span class="uppercase" data-v-30c10b10>${ssrInterpolate(_ctx.cartproduct.size)}</span></span><span class="product__color block" data-v-30c10b10>Цвет: <!--[-->`);
      ssrRenderList(_ctx.cartproduct.colors, (color) => {
        _push(`<span data-v-30c10b10>${ssrInterpolate(color)}</span>`);
      });
      _push(`<!--]--></span><div class="product__quantity-block" data-v-30c10b10><button class="product__btn product__btn_decrement" data-v-30c10b10><img${ssrRenderAttr("src", _imports_0)} alt="Удалить" data-v-30c10b10></button><span class="product__quantity" data-v-30c10b10>${ssrInterpolate(_ctx.cartproduct.quantity)}</span><button class="product__btn product__btn_increment" data-v-30c10b10><img${ssrRenderAttr("src", _imports_1)} alt="Добавить" data-v-30c10b10></button></div></div><button class="product__remove-btn" data-v-30c10b10><img${ssrRenderAttr("src", _imports_0$1)} alt="Удалить из корзины" class="product__remove-icon" data-v-30c10b10></button></div></li>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/CartItemVue.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-30c10b10"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CartListVue",
  __ssrInlineRender: true,
  props: {
    cartList: {}
  },
  setup(__props) {
    useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartItemVue = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-list" }, _attrs))} data-v-a0c3671c><ul class="cart-list__content" data-v-a0c3671c><!--[-->`);
      ssrRenderList(_ctx.cartList, (item) => {
        _push(ssrRenderComponent(_component_CartItemVue, {
          key: item.id,
          cartproduct: item,
          class: "cart-list__item"
        }, null, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/CartListVue.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a0c3671c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModalWindowVue",
  __ssrInlineRender: true,
  setup(__props) {
    const CartStore = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["modal-wrapper", { "opened": unref(CartStore).isModalOpened }]
      }, _attrs))} data-v-cdf10a28><div class="modal" data-v-cdf10a28><span class="modal__message" data-v-cdf10a28> Удалить товар из корзины? </span><div class="modal__buttons" data-v-cdf10a28><button class="modal__btn modal__btn_cancel" data-v-cdf10a28> Нет </button><button class="modal__btn modal__btn_accept" data-v-cdf10a28> Да </button></div><button class="modal__close-btn" data-v-cdf10a28><img${ssrRenderAttr("src", _imports_0$1)} alt="Закрыть" data-v-cdf10a28></button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalWindowVue.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cdf10a28"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CheckoutVue",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout" }, _attrs))} data-v-10c2b532><button class="checkout__close-btn" data-v-10c2b532><img${ssrRenderAttr("src", _imports_0$1)} alt="Отмена" data-v-10c2b532></button><div class="checkout__inner" data-v-10c2b532><form class="checkout__form form" data-v-10c2b532><div class="checkout__block" data-v-10c2b532><span class="checkout__label" data-v-10c2b532>Имя: </span><input type="text" name="username" id="username" class="checkout__input" data-v-10c2b532></div><div class="checkout__block" data-v-10c2b532><span class="checkout__label" data-v-10c2b532>Номер телефона: </span><input type="text" name="phone_number" id="phone_number" class="checkout__input" data-v-10c2b532></div><div class="checkout__block" data-v-10c2b532><span class="checkout__label" data-v-10c2b532>Город: </span><input type="text" name="city" id="address" class="checkout__input" data-v-10c2b532></div><div class="checkout__block" data-v-10c2b532><span class="checkout__label" data-v-10c2b532>Улица: </span><input type="text" name="street" id="street" class="checkout__input" data-v-10c2b532></div><div class="checkout__block" data-v-10c2b532><span class="checkout__label" data-v-10c2b532>№ дома: </span><input type="text" name="house" id="house" class="checkout__input" data-v-10c2b532></div><div class="checkout__block" data-v-10c2b532><span class="checkout__label" data-v-10c2b532>№ квартиры: </span><input type="text" name="flat" id="flat" class="checkout__input" data-v-10c2b532></div><div class="checkout__block" data-v-10c2b532><span class="checkout__label" data-v-10c2b532>Комментарий: </span><input type="text" name="flat" id="flat" class="checkout__input" data-v-10c2b532></div></form></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CheckoutVue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-10c2b532"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const CartStore = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AlertVue = __nuxt_component_0$2;
      const _component_ScrollVue = __nuxt_component_0$3;
      const _component_CartListVue = __nuxt_component_2;
      const _component_ModalWindowVue = __nuxt_component_3;
      const _component_CheckoutVue = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart page h-full" }, _attrs))} data-v-b223becd><h1 class="cart__title page-title" data-v-b223becd>Корзина (${ssrInterpolate(unref(CartStore).getCartCount)})</h1>`);
      if (unref(CartStore).getCartCount == 0) {
        _push(ssrRenderComponent(_component_AlertVue, null, {
          message: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="cart__message text-[25px] text-left" data-v-b223becd${_scopeId}>В корзине нет товаров</span>`);
            } else {
              return [
                createVNode("span", { class: "cart__message text-[25px] text-left" }, "В корзине нет товаров")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="cart__inner h-full" data-v-b223becd>`);
        _push(ssrRenderComponent(_component_ScrollVue, { class: "flex flex-col flex-1" }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col justify-between h-full flex-1" data-v-b223becd${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CartListVue, {
                "cart-list": unref(CartStore).cart
              }, null, _parent2, _scopeId));
              _push2(`<button class="cart__open-checkout primary-button" data-v-b223becd${_scopeId}>Заказать</button></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col justify-between h-full flex-1" }, [
                  createVNode(_component_CartListVue, {
                    "cart-list": unref(CartStore).cart
                  }, null, 8, ["cart-list"]),
                  createVNode("button", {
                    onClick: unref(CartStore).openCheckout,
                    class: "cart__open-checkout primary-button"
                  }, "Заказать", 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_ModalWindowVue, null, null, _parent));
      if (unref(CartStore).isCheckoutOpened) {
        _push(ssrRenderComponent(_component_CheckoutVue, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b223becd"]]);
export {
  cart as default
};
//# sourceMappingURL=cart-C79jhGzv.js.map
