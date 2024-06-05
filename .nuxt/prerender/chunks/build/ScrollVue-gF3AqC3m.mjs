import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/index.mjs';
import { _ as _export_sfc, f as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/server-renderer/index.mjs';

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
      }, _attrs))} data-v-dfdefa96>`);
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfdefa96"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ScrollVue-gF3AqC3m.mjs.map
