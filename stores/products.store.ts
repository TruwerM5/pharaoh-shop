
import type { LocationQuery, LocationQueryValue } from "vue-router";
import type { Product } from "~/types/product";
import type { Filters } from "~/types/filters";
export const useProductsStore = defineStore('ProductsStore', {
    state: () => ({
        products: <Product[]>[
            {
                id: 1,
                name: 'Кеды Adidas Superstar',
                category: 'shoes',
                gender: 'male',
                brand: 'adidas',
                color: 'белый',
                images: [
                    'adidas-superstar-1.jpeg',
                    'adidas-superstar-2.jpeg',
                    'adidas-superstar-3.jpeg',
                    'adidas-superstar-4.jpeg',
                    'adidas-superstar-5.jpeg',
                    'adidas-superstar-6.jpeg',
                ],
                price: 4290,
                sizes: ['39','40','41','42','43','44', '45']
            },{
                id: 2,
                name: 'Кеды Park Lifestyle OG',
                category: 'shoes',
                gender: 'male',
                brand: 'puma',
                color: 'белый / зеленый',
                images: [
                    'puma-1.jpeg',
                    'puma-2.jpeg',
                    'puma-3.jpeg',
                    'puma-4.jpeg',
                    'puma-5.jpeg',
                    'puma-6.jpeg',
                ],
                price: 5400,
                sizes: ['39','40','41','42','43','44','45']
            },{
                id: 3,
                name: 'Футболка New Balance',
                category: 'tshirts',
                gender: 'male',
                brand: 'new-balance',
                color: 'Черный',
                images: [
                    'newbalance-tshirt.jpeg'
                ],
                price: 1700,
                sizes: ['xs','s','m','l','xl']
            },{
                id: 4,
                name: 'Футболка Puma',
                category: 'tshirts',
                gender: 'male',
                brand: 'puma',
                color: 'Черный',
                images: [
                    'puma-tshirt.jpeg'
                ],
                price: 1650,
                sizes: ['xs','s','m','l','xl']
            },{
                id: 5,
                name: 'Футболка The North Face',
                category: 'tshirts',
                gender: 'male',
                brand: 'the-north-face',
                color: 'Белый',
                images: [
                    'tnf-tshirt.jpeg'
                ],
                price: 1750,
                sizes: ['xs','s','m','l','xl']
            },{
                id: 6,
                name: 'Ветровка Carhatt',
                category: 'jackets',
                gender: 'male',
                brand: 'carhartt',
                color: 'Черный',
                images: [
                    'carhatt-jacket-1.jpeg',
                    'carhatt-jacket-2.jpeg',
                    'carhatt-jacket-3.jpeg',
                    'carhatt-jacket-4.jpeg',
                    'carhatt-jacket-5.jpeg'
                ],
                price: 3800,
                sizes: ['xs','s','m','l','xl']
            }
        ],
        translations: [
            ['tshirts', 'футболки'],
            ['jackets', 'куртки'],
            ['shoes', 'кеды'],
            ['slates', 'сланцы'],
            ['jeans', 'джинсы'],
        ],
        areFiltersOpened: false,
        
        filteredProducts: <Product[]>[],
        currentProducts: <Product[]>[],
        isClient: false,
    }),
    actions: {
        getById(id: number) {
            return this.products.find(item => item.id == id);
        },
        checkQueryString(query: LocationQuery) {
            let instance: string | null = null;
            this.translations.forEach(item => {
                if(item[0] == query.category) {
                    instance = item[1];
                } 
            });
            return instance;
        },
        getCategoryTitle(category: string | string[]) {
            return this.translations.find(item => {
                if(item[0] == category) {
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
        setFilters(category: string | string[], filters: Filters) {
            this.filteredProducts = this.products.filter(product => {
               return (!filters.brand || product.brand == filters.brand) &&
                      (!filters.gender || product.gender == filters.gender) &&
                      (!filters.minPrice || product.price >= Number(filters.minPrice)) &&
                      (!filters.maxPrice || product.price <= Number(filters.maxPrice)) &&
                      product.category == category;
            });
        },
        setCurrentProducts(instance: Product[]) {
            this.currentProducts = instance;
        }
    }
})