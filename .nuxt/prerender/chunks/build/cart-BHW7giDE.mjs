import { _ as _imports_0$1, a as __nuxt_component_0$2 } from './virtual_public-Bw0j0hWT.mjs';
import { _ as __nuxt_component_0$3 } from './ScrollVue-gF3AqC3m.mjs';
import { _ as _export_sfc, e as useCartStore, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, unref, ref } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/h3/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/radix3/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/defu/dist/defu.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/klona/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/destr/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/scule/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/pathe/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/ssr/dist/index.mjs';

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
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "product" }, _attrs))} data-v-b23c6e61><div class="product__content" data-v-b23c6e61>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { path: `/products/${_ctx.cartproduct.id}` },
        class: "product__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `/images/${_ctx.cartproduct.images[0]}`)}${ssrRenderAttr("alt", _ctx.cartproduct.name)} class="product__image" data-v-b23c6e61${_scopeId}>`);
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
      _push(`<div class="product__info" data-v-b23c6e61><span class="product__name block" data-v-b23c6e61>${ssrInterpolate(_ctx.cartproduct.name)}</span><span class="product__size block" data-v-b23c6e61>\u0420\u0430\u0437\u043C\u0435\u0440: <span class="uppercase" data-v-b23c6e61>${ssrInterpolate(_ctx.cartproduct.size)}</span></span><span class="product__color block" data-v-b23c6e61>\u0426\u0432\u0435\u0442: <!--[-->`);
      ssrRenderList(_ctx.cartproduct.colors, (color) => {
        _push(`<span data-v-b23c6e61>${ssrInterpolate(color)}</span>`);
      });
      _push(`<!--]--></span><div class="product__quantity-block" data-v-b23c6e61><button class="product__btn product__btn_decrement" data-v-b23c6e61><img${ssrRenderAttr("src", _imports_0)} alt="\u0423\u0434\u0430\u043B\u0438\u0442\u044C" data-v-b23c6e61></button><span class="product__quantity" data-v-b23c6e61>${ssrInterpolate(_ctx.cartproduct.quantity)}</span><button class="product__btn product__btn_increment" data-v-b23c6e61><img${ssrRenderAttr("src", _imports_1)} alt="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" data-v-b23c6e61></button></div><span class="product__sum" data-v-b23c6e61>${ssrInterpolate(_ctx.cartproduct.quantity)} \xD7 ${ssrInterpolate(_ctx.cartproduct.price)} = ${ssrInterpolate(_ctx.cartproduct.quantity * _ctx.cartproduct.price)}</span></div><button class="product__remove-btn" data-v-b23c6e61><img${ssrRenderAttr("src", _imports_0$1)} alt="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B" class="product__remove-icon" data-v-b23c6e61></button></div></li>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/CartItemVue.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b23c6e61"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CartListVue",
  __ssrInlineRender: true,
  props: {
    cartList: {}
  },
  setup(__props) {
    const CartStore = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartItemVue = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-list" }, _attrs))} data-v-5cbc7877><ul class="cart-list__content" data-v-5cbc7877><!--[-->`);
      ssrRenderList(_ctx.cartList, (item) => {
        _push(ssrRenderComponent(_component_CartItemVue, {
          key: item.id,
          cartproduct: item,
          class: "cart-list__item"
        }, null, _parent));
      });
      _push(`<!--]--></ul><span class="cart-list__total-sum flex justify-between items-center mt-[10px] font-semibold" data-v-5cbc7877> \u0418\u0442\u043E\u0433\u043E: <span class="ml-auto" data-v-5cbc7877>${ssrInterpolate(unref(CartStore).getTotalSum)}\u0440.</span></span><span class="cart-list__text block" data-v-5cbc7877>\u0426\u0435\u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</span></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/CartListVue.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5cbc7877"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModalWindowVue",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal" }, _attrs))} data-v-977e4381><div class="modal__inner" data-v-977e4381><span class="modal__message" data-v-977e4381> \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B? </span><div class="modal__buttons" data-v-977e4381><button class="modal__btn modal__btn_cancel" data-v-977e4381> \u041D\u0435\u0442 </button><button class="modal__btn modal__btn_accept" data-v-977e4381> \u0414\u0430 </button></div><button class="modal__close-btn" data-v-977e4381><img${ssrRenderAttr("src", _imports_0$1)} alt="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" data-v-977e4381></button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalWindowVue.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-977e4381"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CheckoutVue",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout modal" }, _attrs))} data-v-e9563d7f><button class="checkout__close-btn modal__close-btn" data-v-e9563d7f><img${ssrRenderAttr("src", _imports_0$1)} alt="\u041E\u0442\u043C\u0435\u043D\u0430" class="modal__close-icon" data-v-e9563d7f></button><div class="checkout__inner" data-v-e9563d7f><form class="checkout__form form" data-v-e9563d7f><div class="checkout__block" data-v-e9563d7f><input type="text" name="email" id="email" class="input checkout__input" placeholder="example@mail.ru" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>Email*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="username" id="username" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>\u0418\u043C\u044F*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="phone_number" id="phone_number" class="input checkout__input" placeholder="+7(999)-999-99-99" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="city" id="address" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>\u0413\u043E\u0440\u043E\u0434*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="street" id="street" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>\u0423\u043B\u0438\u0446\u0430*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="house" id="house" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>\u2116 \u0434\u043E\u043C\u0430*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="flat" id="flat" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>\u2116 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="comment" id="comment" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</span></div></form><p class="checkout__text" data-v-e9563d7f>* - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435</p><button class="primary-button" data-v-e9563d7f>\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C</button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CheckoutVue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e9563d7f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const CartStore = useCartStore();
    const isClient = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AlertVue = __nuxt_component_0$2;
      const _component_ScrollVue = __nuxt_component_0$3;
      const _component_CartListVue = __nuxt_component_2;
      const _component_ModalWindowVue = __nuxt_component_3;
      const _component_CheckoutVue = __nuxt_component_4;
      if (unref(isClient)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart page h-full" }, _attrs))} data-v-0d27d9b5><h1 class="cart__title page-title" data-v-0d27d9b5>\u041A\u043E\u0440\u0437\u0438\u043D\u0430 (${ssrInterpolate(unref(CartStore).getCartCount)})</h1>`);
        if (unref(CartStore).getCartCount == 0) {
          _push(ssrRenderComponent(_component_AlertVue, null, {
            message: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="cart__message text-[25px] text-left" data-v-0d27d9b5${_scopeId}>\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 \u043D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432</span>`);
              } else {
                return [
                  createVNode("span", { class: "cart__message text-[25px] text-left" }, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 \u043D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="cart__inner h-full" data-v-0d27d9b5>`);
          _push(ssrRenderComponent(_component_ScrollVue, { class: "flex flex-col flex-1" }, {
            content: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex flex-col justify-between h-full flex-1" data-v-0d27d9b5${_scopeId}>`);
                _push2(ssrRenderComponent(_component_CartListVue, {
                  "cart-list": unref(CartStore).cart
                }, null, _parent2, _scopeId));
                _push2(`<button class="cart__open-checkout-button primary-button" data-v-0d27d9b5${_scopeId}>\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C</button></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-col justify-between h-full flex-1" }, [
                    createVNode(_component_CartListVue, {
                      "cart-list": unref(CartStore).cart
                    }, null, 8, ["cart-list"]),
                    createVNode("button", {
                      onClick: unref(CartStore).openCheckout,
                      class: "cart__open-checkout-button primary-button"
                    }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C", 8, ["onClick"])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        if (unref(CartStore).isModalOpened) {
          _push(ssrRenderComponent(_component_ModalWindowVue, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(CartStore).isCheckoutOpened) {
          _push(ssrRenderComponent(_component_CheckoutVue, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d27d9b5"]]);

export { cart as default };
//# sourceMappingURL=cart-BHW7giDE.mjs.map
