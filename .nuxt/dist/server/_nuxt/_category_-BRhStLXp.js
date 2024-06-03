import { _ as __nuxt_component_0 } from "./ScrollVue-gF3AqC3m.js";
import { _ as __nuxt_component_1 } from "./ProductsList-CbqsI7Kk.js";
import { _ as _imports_0$1, a as __nuxt_component_0$1 } from "./virtual_public-Bw0j0hWT.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from "vue";
import { u as useProductsStore } from "./products.store-v9-VJaLJ.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, g as useRoute, f as useRouter, n as navigateTo } from "../server.mjs";
import "hookable";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "destr";
import "klona";
import "devalue";
import "defu";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "@vue/devtools-api";
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
        title: "Мужской"
      },
      {
        gender: "female",
        title: "Женский"
      },
      {
        gender: "unisex",
        title: "Унисекс"
      }
    ]);
    useProductsStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filters modal" }, _attrs))} data-v-c7815cb7><div class="filters__inner" data-v-c7815cb7><div class="filters__block" data-v-c7815cb7><span class="filters__label" data-v-c7815cb7> Пол: </span><select placeholder="Не выбрано" name="gender" id="gender" class="filters__select" data-v-c7815cb7><option value="" selected placeholder="Не выбрано" data-v-c7815cb7>Не выбрано</option><!--[-->`);
      ssrRenderList(unref(gendersList), (gender, i) => {
        _push(`<option${ssrRenderAttr("value", gender.gender)} data-v-c7815cb7>${ssrInterpolate(gender.title)}</option>`);
      });
      _push(`<!--]--></select></div><div class="filters__block" data-v-c7815cb7><span class="filters__label" data-v-c7815cb7> Бренд: </span><select placeholder="Не выбрано" name="brand" id="brand" class="filters__select" data-v-c7815cb7><option value="" selected placeholder="Не выбрано" data-v-c7815cb7>Не выбрано</option><!--[-->`);
      ssrRenderList(unref(brandsList), (brand, i) => {
        _push(`<option${ssrRenderAttr("value", brand)} class="capitalize" data-v-c7815cb7>${ssrInterpolate(brand.split("-").join(" "))}</option>`);
      });
      _push(`<!--]--></select></div><div class="filters__block" data-v-c7815cb7><span class="filters__label block mb-[10px]" data-v-c7815cb7> Цена </span><input${ssrRenderAttr("value", _ctx.filters.minPrice)} type="number" class="filters__input" placeholder="От" id="min_price" name="min_price" data-v-c7815cb7><input${ssrRenderAttr("value", _ctx.filters.maxPrice)} type="number" class="filters__input" placeholder="До" id="max_price" name="max_price" data-v-c7815cb7></div>`);
      ssrRenderSlot(_ctx.$slots, "button", {}, null, _push, _parent);
      _push(`</div><button class="filters__close-btn modal__close-btn" data-v-c7815cb7><img${ssrRenderAttr("src", _imports_0$1)} alt="Закрыть" class="filters__close-icon" data-v-c7815cb7></button></div>`);
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
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Фильтры" class="categories__filter-icon" data-v-4656e787${_scopeId}></button></div>`);
            if (unref(ProductsStore).currentProducts.length > 0) {
              _push2(ssrRenderComponent(_component_ProductsList, {
                products: unref(ProductsStore).currentProducts
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_AlertVue, null, {
                message: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="alert-message text-[16px] test-rose-500" data-v-4656e787${_scopeId2}> Извините, по вашему запросу ничего найдено. </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "alert-message text-[16px] test-rose-500" }, " Извините, по вашему запросу ничего найдено. ")
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
                    alt: "Фильтры",
                    class: "categories__filter-icon"
                  })
                ], 8, ["onClick"])
              ]),
              unref(ProductsStore).currentProducts.length > 0 ? (openBlock(), createBlock(_component_ProductsList, {
                key: 0,
                products: unref(ProductsStore).currentProducts
              }, null, 8, ["products"])) : (openBlock(), createBlock(_component_AlertVue, { key: 1 }, {
                message: withCtx(() => [
                  createVNode("span", { class: "alert-message text-[16px] test-rose-500" }, " Извините, по вашему запросу ничего найдено. ")
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
            _push2(`<button class="primary-button filter-accept-btn" data-v-4656e787${_scopeId}>Применить</button><button class="filter-disable-btn secondary-btn" data-v-4656e787${_scopeId}>Убрать все фильтры</button>`);
          } else {
            return [
              createVNode("button", {
                onClick: acceptFilters,
                class: "primary-button filter-accept-btn"
              }, "Применить"),
              createVNode("button", {
                onClick: disableFilters,
                class: "filter-disable-btn secondary-btn"
              }, "Убрать все фильтры")
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
export {
  _category_ as default
};
//# sourceMappingURL=_category_-BRhStLXp.js.map
