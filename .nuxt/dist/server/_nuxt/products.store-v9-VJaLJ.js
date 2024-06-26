import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { h as defineStore } from "../server.mjs";
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
        brand: "carhartt",
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
    ],
    translations: [
      ["tshirts", "футболки"],
      ["jackets", "куртки"],
      ["sneakers", "кеды"],
      ["slates", "сланцы"],
      ["jeans", "джинсы"]
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
export {
  useProductsStore as u
};
//# sourceMappingURL=products.store-v9-VJaLJ.js.map
