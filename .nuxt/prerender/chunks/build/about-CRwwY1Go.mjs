import { defineComponent, useSSRContext, ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/index.mjs';
import { b as asyncDataDefaults, c as useNuxtApp, d as createError } from './server.mjs';
import { ssrRenderAttrs } from 'file:///home/kali/Documents/pharaoh_shop/frontend/node_modules/vue/server-renderer/index.mjs';
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

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = nuxtApp.runWithContext(_handler);
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key, nuxtApp)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = null;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = null;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key].cancelled = true;
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useAsyncData(() => $fetch("http://localhost:3000"), "$DWlCMkxhze");
    console.log(data.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-rose-500">About page</h1></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CRwwY1Go.mjs.map
