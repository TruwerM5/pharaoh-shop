import { useSSRContext, mergeProps } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/server-renderer/index.mjs';
import { i as defineStore, _ as _export_sfc } from './server.mjs';

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
        name: "\u041A\u0435\u0434\u044B Adidas Superstar",
        category: "sneakers",
        gender: "male",
        brand: "adidas",
        colors: ["\u0431\u0435\u043B\u044B\u0439"],
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
        name: "\u041A\u0435\u0434\u044B Park Lifestyle OG",
        category: "sneakers",
        gender: "male",
        brand: "puma",
        colors: ["\u0431\u0435\u043B\u044B\u0439", "\u0437\u0435\u043B\u0435\u043D\u044B\u0439"],
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
        name: "\u0424\u0443\u0442\u0431\u043E\u043B\u043A\u0430 New Balance",
        category: "tshirts",
        gender: "male",
        brand: "new-balance",
        colors: ["\u0427\u0435\u0440\u043D\u044B\u0439"],
        images: [
          "newbalance-tshirt.jpeg"
        ],
        price: 1700,
        sizes: ["xs", "s", "m", "l", "xl"]
      },
      {
        id: 4,
        name: "\u0424\u0443\u0442\u0431\u043E\u043B\u043A\u0430 Puma",
        category: "tshirts",
        gender: "male",
        brand: "puma",
        colors: ["\u0427\u0435\u0440\u043D\u044B\u0439"],
        images: [
          "puma-tshirt.jpeg"
        ],
        price: 1650,
        sizes: ["xs", "s", "m", "l", "xl"]
      },
      {
        id: 5,
        name: "\u0424\u0443\u0442\u0431\u043E\u043B\u043A\u0430 The North Face",
        category: "tshirts",
        gender: "male",
        brand: "the-north-face",
        colors: ["\u0411\u0435\u043B\u044B\u0439"],
        images: [
          "tnf-tshirt.jpeg"
        ],
        price: 1750,
        sizes: ["xs", "s", "m", "l", "xl"]
      },
      {
        id: 6,
        name: "\u0412\u0435\u0442\u0440\u043E\u0432\u043A\u0430 Carhatt",
        category: "jackets",
        gender: "male",
        brand: "carhatt",
        colors: ["\u0427\u0435\u0440\u043D\u044B\u0439"],
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

export { __nuxt_component_0 as _, useProductsStore as u };
//# sourceMappingURL=products.store-DFtulFYh.mjs.map
