import { useProductsStore } from "#imports";
const ProductsStore = useProductsStore();

export default defineNuxtRouteMiddleware((to, from) => {
    if(to.query) {
        ProductsStore.setFiltersBySeason(to.params.season, to.query);
        ProductsStore.currentProducts = ProductsStore.filteredProducts;
    } else {
        ProductsStore.currentProducts = ProductsStore.products.filter(item => {    
            return item.season == to.params.season;
        });
    }
    ProductsStore.setFiltersBySeason(to.params.season, to.query);
});