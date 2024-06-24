
import type { LocationQuery, LocationQueryRaw, LocationQueryValue } from "vue-router";
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
                season: 'summer',
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
                season: 'summer',
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
                season: 'summer',
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
                season: 'summer',
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
                season: 'summer',
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
                season: 'autumn',
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
        currentGridView: 2,
        filters: <Filters>{
            gender: "",
            brand: "",
            minPrice: "",
            maxPrice: "",
        },
        filterParam: <string | string[]> "",
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
        filterBySeason(season: string | string[]) {
            return this.products.filter(item => item.season == season);
        },
        openFilters() {
            this.areFiltersOpened = true;
        },
        closeFilters() {
            this.areFiltersOpened = false;
        },
        setFilters() {
            console.log(this.filters);
            this.currentProducts = this.products.filter(product => {
               return (!this.filters.brand || product.brand == this.filters.brand) &&
                      (!this.filters.gender || product.gender == this.filters.gender) &&
                      (!this.filters.minPrice || product.price >= Number(this.filters.minPrice)) &&
                      (!this.filters.maxPrice || product.price <= Number(this.filters.maxPrice)) &&
                      (product.category == this.filterParam || product.season == this.filterParam);
            });
            console.log(this.currentProducts);
        },
        setCurrentProducts(instance: Product[]) {
            this.currentProducts = instance;
        },
        initFilters({gender, brand, minPrice, maxPrice}:Filters) {
            if(gender) {
                this.filters.gender = gender;
            }
            if(brand) {
                this.filters.brand = brand;
            }
            if(minPrice) {
                this.filters.minPrice = minPrice;
            }
            if(maxPrice) {
                this.filters.maxPrice = maxPrice;
            }
            
        },
        setGridView(grid: number) {
            this.currentGridView = grid;
        },
        checkWindowWidth() {
            if(window && window.innerWidth >= 768) {
                this.setGridView(4);
            } else {
                this.setGridView(2);
            }
        },
        removeFilters() {
            this.filters = {};
            this.closeFilters();
        },
        applyFilters() {
            let query: LocationQueryRaw = { };
            if(this.filters.brand) {
                query.brand = this.filters.brand;
            }
            if(this.filters.gender) {
                query.gender = this.filters.gender;
            }
            if(this.filters.minPrice) {
                query.minPrice = this.filters.minPrice;
            }
            if(this.filters.maxPrice) {
                query.maxPrice = this.filters.maxPrice;
            }

            if(query.minPrice && query.maxPrice) {
                if(query.minPrice > query.maxPrice) {
                    query.minPrice = null;
                    query.maxPrice = null;
                }
            }

            return query;
        }
    }
})