import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-df3d81e3><div class="hero__inner" data-v-df3d81e3>`);
      if (unref(banners)[unref(currentIndex)].id) {
        _push(`<img${ssrRenderAttr("src", `/images/${unref(banners)[unref(currentIndex)].image}`)}${ssrRenderAttr("alt", `${unref(banners)[unref(currentIndex)].id}`)} class="hero__image" data-v-df3d81e3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hero__content" data-v-df3d81e3><h1 class="hero__title page-title" data-v-df3d81e3>Pharaoh shop</h1></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroVue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HeroVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-df3d81e3"]]);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DKQO2MtL.js.map
