import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc, i as defineStore } from "../server.mjs";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
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
const useProductsStore = defineStore("ProductsStore", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Кеды Adidas Superstar",
        category: "sneakers",
        gender: "male",
        brand: "adidas",
        colors: ["белый"],
        images: [
          "adidas-superstar-1.jpeg",
          "adidas-superstar-2.jpeg",
          "adidas-superstar-3.jpeg",
          "adidas-superstar-4.jpeg",
          "adidas-superstar-5.jpeg",
          "adidas-superstar-6.jpeg"
        ],
        price: 4290,
        sizes: ["39", "40", "41", "42", "43", "44", "45"]
      },
      {
        id: 2,
        name: "Кеды Park Lifestyle OG",
        category: "sneakers",
        gender: "male",
        brand: "puma",
        colors: ["белый", "зеленый"],
        images: [
          "puma-1.jpeg",
          "puma-2.jpeg",
          "puma-3.jpeg",
          "puma-4.jpeg",
          "puma-5.jpeg",
          "puma-6.jpeg"
        ],
        price: 5400,
        sizes: ["39", "40", "41", "42", "43", "44", "45"]
      },
      {
        id: 3,
        name: "Футболка New Balance",
        category: "tshirts",
        gender: "male",
        brand: "new-balance",
        colors: ["Черный"],
        images: [
          "newbalance-tshirt.jpeg"
        ],
        price: 1700,
        sizes: ["xs", "s", "m", "l", "xl"]
      },
      {
        id: 4,
        name: "Футболка Puma",
        category: "tshirts",
        gender: "male",
        brand: "puma",
        colors: ["Черный"],
        images: [
          "puma-tshirt.jpeg"
        ],
        price: 1650,
        sizes: ["xs", "s", "m", "l", "xl"]
      },
      {
        id: 5,
        name: "Футболка The North Face",
        category: "tshirts",
        gender: "male",
        brand: "the-north-face",
        colors: ["Белый"],
        images: [
          "tnf-tshirt.jpeg"
        ],
        price: 1750,
        sizes: ["xs", "s", "m", "l", "xl"]
      },
      {
        id: 6,
        name: "Ветровка Carhatt",
        category: "jackets",
        gender: "male",
        brand: "carhatt",
        colors: ["Черный"],
        images: [
          "carhatt-jacket-1.jpeg",
          "carhatt-jacket-2.jpeg",
          "carhatt-jacket-3.jpeg",
          "carhatt-jacket-4.jpeg",
          "carhatt-jacket-5.jpeg"
        ],
        price: 3800,
        sizes: ["xs", "s", "m", "l", "xl"]
      }
    ]
  }),
  actions: {
    getById(id) {
      return this.products.find((item) => item.id == id);
    }
  }
});
export {
  __nuxt_component_0 as _,
  useProductsStore as u
};
//# sourceMappingURL=products.store-DFtulFYh.js.map
