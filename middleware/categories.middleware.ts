
import { useProductsStore } from "#imports";
const ProductsStore = useProductsStore();

export default defineNuxtRouteMiddleware((to, from) => {
    if(to.query) {
        ProductsStore.setFilters(to.params.category, to.query);
        ProductsStore.currentProducts = ProductsStore.filteredProducts;
    } else {
        ProductsStore.currentProducts = ProductsStore.products.filter(item => {    
            return item.category == to.params.category;
        });
    }
    ProductsStore.setFilters(to.params.category, to.query);
});