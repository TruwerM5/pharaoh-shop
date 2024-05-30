import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { h as useRouter, _ as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ScrollVue",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    const container = ref();
    ref(0);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(isActive) ? null : { display: "none" },
        class: "scroll-block h-full",
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-7d89ab69>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollVue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d89ab69"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=ScrollVue-CgiT8ynq.js.map