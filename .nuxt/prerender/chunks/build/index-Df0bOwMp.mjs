import { useSSRContext, defineComponent, mergeProps, ref, unref } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/h3/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/devalue/index.js';
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
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/cookie-es/dist/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeroVue",
  __ssrInlineRender: true,
  setup(__props) {
    const banners = ref([
      {
        id: 1,
        image: "reebok-banner.jpg"
      },
      {
        id: 2,
        image: "jackets-banner.jpg"
      },
      {
        id: 3,
        image: "shirts-banner.jpg"
      },
      {
        id: 4,
        image: "stone-island-banner.jpg"
      },
      {
        id: 5,
        image: "stone-island-banner2.jpg"
      },
      {
        id: 6,
        image: "stone-island-banner3.jpg"
      },
      {
        id: 7,
        image: "adidas-banner.jpg"
      },
      {
        id: 8,
        image: "new-balance-banner2.jpg"
      },
      {
        id: 9,
        image: "tnf-banner.jpg"
      },
      {
        id: 10,
        image: "tnf-banner2.jpg"
      }
    ]);
    const currentIndex = ref(0);
    ref(banners.value[0]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-c01f1d11><div class="hero__inner" data-v-c01f1d11>`);
      if (unref(banners)[unref(currentIndex)].id) {
        _push(`<img${ssrRenderAttr("src", `/images/${unref(banners)[unref(currentIndex)].image}`)}${ssrRenderAttr("alt", `${unref(banners)[unref(currentIndex)].id}`)} class="hero__image" data-v-c01f1d11>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hero__content" data-v-c01f1d11><h1 class="hero__title page-title" data-v-c01f1d11>Pharaoh shop</h1></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroVue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HeroVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c01f1d11"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))}>`);
      _push(ssrRenderComponent(HeroVue, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Df0bOwMp.mjs.map
