import { h as defineStore } from './server.mjs';

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
        brand: "carhartt",
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
    ],
    translations: [
      ["tshirts", "\u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0438"],
      ["jackets", "\u043A\u0443\u0440\u0442\u043A\u0438"],
      ["sneakers", "\u043A\u0435\u0434\u044B"],
      ["slates", "\u0441\u043B\u0430\u043D\u0446\u044B"],
      ["jeans", "\u0434\u0436\u0438\u043D\u0441\u044B"]
    ],
    areFiltersOpened: false,
    filteredProducts: [],
    currentProducts: [],
    isClient: false
  }),
  actions: {
    getById(id) {
      return this.products.find((item) => item.id == id);
    },
    checkQueryString(query) {
      let instance = null;
      this.translations.forEach((item) => {
        if (item[0] == query.category) {
          instance = item[1];
        }
      });
      return instance;
    },
    getCategoryTitle(category) {
      return this.translations.find((item) => {
        if (item[0] == category) {
          return true;
        }
      });
    },
    openFilters() {
      this.areFiltersOpened = true;
    },
    closeFilters() {
      this.areFiltersOpened = false;
    },
    setFilters(category, filters) {
      this.filteredProducts = this.products.filter((product) => {
        return (!filters.brand || product.brand == filters.brand) && (!filters.gender || product.gender == filters.gender) && (!filters.minPrice || product.price >= Number(filters.minPrice)) && (!filters.maxPrice || product.price <= Number(filters.maxPrice)) && product.category == category;
      });
    },
    setCurrentProducts(instance) {
      this.currentProducts = instance;
    }
  }
});

export { useProductsStore as u };
//# sourceMappingURL=products.store-v9-VJaLJ.mjs.map
