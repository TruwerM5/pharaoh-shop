import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "alert" }, _attrs))} data-v-6c2ce9df>`);
  ssrRenderSlot(_ctx.$slots, "message", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AlertVue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6c2ce9df"]]);
const _imports_0 = publicAssetsURL("/images/close-icon.svg");
export {
  _imports_0 as _,
  __nuxt_component_0 as a
};
//# sourceMappingURL=virtual_public-Bw0j0hWT.js.map
