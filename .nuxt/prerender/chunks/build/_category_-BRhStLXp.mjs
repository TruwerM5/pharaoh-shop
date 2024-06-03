import { _ as __nuxt_component_0 } from './ScrollVue-gF3AqC3m.mjs';
import { _ as __nuxt_component_1 } from './ProductsList-CbqsI7Kk.mjs';
import { _ as _imports_0$1, a as __nuxt_component_0$1 } from './virtual_public-Bw0j0hWT.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/index.mjs';
import { u as useProductsStore } from './products.store-v9-VJaLJ.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, g as useRoute, f as useRouter, n as navigateTo } from './server.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/h3/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/radix3/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/defu/dist/defu.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/devalue/index.js';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/destr/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/klona/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/scule/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/pathe/dist/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FiltersVue",
  __ssrInlineRender: true,
  props: {
    filters: {}
  },
  setup(__props) {
    const brandsList = ref([
      "adidas",
      "new-balance",
      "puma",
      "reebok",
      "carhartt",
      "nike",
      "the-north-face",
      "stone-island"
    ]);
    const gendersList = ref([
      {
        gender: "male",
        title: "\u041C\u0443\u0436\u0441\u043A\u043E\u0439"
      },
      {
        gender: "female",
        title: "\u0416\u0435\u043D\u0441\u043A\u0438\u0439"
      },
      {
        gender: "unisex",
        title: "\u0423\u043D\u0438\u0441\u0435\u043A\u0441"
      }
    ]);
    useProductsStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filters modal" }, _attrs))} data-v-c7815cb7><div class="filters__inner" data-v-c7815cb7><div class="filters__block" data-v-c7815cb7><span class="filters__label" data-v-c7815cb7> \u041F\u043E\u043B: </span><select placeholder="\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E" name="gender" id="gender" class="filters__select" data-v-c7815cb7><option value="" selected placeholder="\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E" data-v-c7815cb7>\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E</option><!--[-->`);
      ssrRenderList(unref(gendersList), (gender, i) => {
        _push(`<option${ssrRenderAttr("value", gender.gender)} data-v-c7815cb7>${ssrInterpolate(gender.title)}</option>`);
      });
      _push(`<!--]--></select></div><div class="filters__block" data-v-c7815cb7><span class="filters__label" data-v-c7815cb7> \u0411\u0440\u0435\u043D\u0434: </span><select placeholder="\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E" name="brand" id="brand" class="filters__select" data-v-c7815cb7><option value="" selected placeholder="\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E" data-v-c7815cb7>\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E</option><!--[-->`);
      ssrRenderList(unref(brandsList), (brand, i) => {
        _push(`<option${ssrRenderAttr("value", brand)} class="capitalize" data-v-c7815cb7>${ssrInterpolate(brand.split("-").join(" "))}</option>`);
      });
      _push(`<!--]--></select></div><div class="filters__block" data-v-c7815cb7><span class="filters__label block mb-[10px]" data-v-c7815cb7> \u0426\u0435\u043D\u0430 </span><input${ssrRenderAttr("value", _ctx.filters.minPrice)} type="number" class="filters__input" placeholder="\u041E\u0442" id="min_price" name="min_price" data-v-c7815cb7><input${ssrRenderAttr("value", _ctx.filters.maxPrice)} type="number" class="filters__input" placeholder="\u0414\u043E" id="max_price" name="max_price" data-v-c7815cb7></div>`);
      ssrRenderSlot(_ctx.$slots, "button", {}, null, _push, _parent);
      _push(`</div><button class="filters__close-btn modal__close-btn" data-v-c7815cb7><img${ssrRenderAttr("src", _imports_0$1)} alt="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" class="filters__close-icon" data-v-c7815cb7></button></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FiltersVue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c7815cb7"]]);
const _imports_0 = publicAssetsURL("/images/filter.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[category]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const ProductsStore = useProductsStore();
    const title = ref("");
    const filters = ref({
      gender: route.query.gender || "",
      brand: route.query.brand || "",
      color: route.params.color || null,
      minPrice: route.query.minPrice || null,
      maxPrice: route.query.maxPrice || null
    });
    const filtersQuantity = ref(getFiltersQuantity());
    title.value = ProductsStore.getCategoryTitle(route.params.category);
    function acceptFilters() {
      let query = {};
      if (filters.value.brand) {
        query.brand = filters.value.brand;
      }
      if (filters.value.gender) {
        query.gender = filters.value.gender;
      }
      if (filters.value.minPrice) {
        query.minPrice = filters.value.minPrice;
      }
      if (filters.value.maxPrice) {
        query.maxPrice = filters.value.maxPrice;
      }
      if (query.minPrice && query.maxPrice) {
        if (query.minPrice > query.maxPrice) {
          query.minPrice = null;
          query.maxPrice = null;
        }
      }
      router.push({ query });
      ProductsStore.setFilters(route.params.category, filters.value);
      ProductsStore.closeFilters();
      filtersQuantity.value = getFiltersQuantity();
    }
    function getFiltersQuantity() {
      let count = 0;
      for (const [key, value] of Object.entries(filters.value)) {
        if (value)
          count++;
      }
      return count;
    }
    function disableFilters() {
      filters.value = {
        brand: "",
        gender: "",
        minPrice: null,
        maxPrice: null
      };
      navigateTo({ query: {} });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScrollVue = __nuxt_component_0;
      const _component_ProductsList = __nuxt_component_1;
      const _component_AlertVue = __nuxt_component_0$1;
      const _component_FiltersVue = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(ProductsStore).isClient ? null : { display: "none" },
        class: "categories page"
      }, _attrs))} data-v-4656e787>`);
      _push(ssrRenderComponent(_component_ScrollVue, null, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="categories__nav page-nav" data-v-4656e787${_scopeId}><h1 class="categories__title page-title" data-v-4656e787${_scopeId}>${ssrInterpolate(unref(title) ? unref(title)[1] : "")}</h1><button class="categories__filter-btn" data-v-4656e787${_scopeId}>`);
            if (unref(filtersQuantity) > 0) {
              _push2(`<span class="categories__filter-quantity" data-v-4656e787${_scopeId}>${ssrInterpolate(unref(filtersQuantity))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="\u0424\u0438\u043B\u044C\u0442\u0440\u044B" class="categories__filter-icon" data-v-4656e787${_scopeId}></button></div>`);
            if (unref(ProductsStore).currentProducts.length > 0) {
              _push2(ssrRenderComponent(_component_ProductsList, {
                products: unref(ProductsStore).currentProducts
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_AlertVue, null, {
                message: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="alert-message text-[16px] test-rose-500" data-v-4656e787${_scopeId2}> \u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043E. </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "alert-message text-[16px] test-rose-500" }, " \u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043E. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode("div", { class: "categories__nav page-nav" }, [
                createVNode("h1", { class: "categories__title page-title" }, toDisplayString(unref(title) ? unref(title)[1] : ""), 1),
                createVNode("button", {
                  onClick: unref(ProductsStore).openFilters,
                  class: "categories__filter-btn"
                }, [
                  unref(filtersQuantity) > 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "categories__filter-quantity"
                  }, toDisplayString(unref(filtersQuantity)), 1)) : createCommentVNode("", true),
                  createVNode("img", {
                    src: _imports_0,
                    alt: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
                    class: "categories__filter-icon"
                  })
                ], 8, ["onClick"])
              ]),
              unref(ProductsStore).currentProducts.length > 0 ? (openBlock(), createBlock(_component_ProductsList, {
                key: 0,
                products: unref(ProductsStore).currentProducts
              }, null, 8, ["products"])) : (openBlock(), createBlock(_component_AlertVue, { key: 1 }, {
                message: withCtx(() => [
                  createVNode("span", { class: "alert-message text-[16px] test-rose-500" }, " \u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043E. ")
                ]),
                _: 1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FiltersVue, {
        style: unref(ProductsStore).areFiltersOpened ? null : { display: "none" },
        filters: unref(filters)
      }, {
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="primary-button filter-accept-btn" data-v-4656e787${_scopeId}>\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C</button><button class="filter-disable-btn secondary-btn" data-v-4656e787${_scopeId}>\u0423\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B</button>`);
          } else {
            return [
              createVNode("button", {
                onClick: acceptFilters,
                class: "primary-button filter-accept-btn"
              }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"),
              createVNode("button", {
                onClick: disableFilters,
                class: "filter-disable-btn secondary-btn"
              }, "\u0423\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _category_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4656e787"]]);

export { _category_ as default };
//# sourceMappingURL=_category_-BRhStLXp.mjs.map
