
import type { CartProduct, RemoveCartProduct } from "~/types/product";
export const useCartStore = defineStore('CartStore', {
    state: () => ({
        cart: <CartProduct[]>([]), //All cart items
        productOnRemove: <RemoveCartProduct>({}), //If user wants to remove product from cart 
        isModalOpened: false,
        isCheckoutOpened: false,
    }),
    getters: {
        getCartCount: (state) => {
            return state.cart.reduce((acc, item) => item.quantity + acc, 0);
        },
        getTotalSum: (state) => {
            return state.cart.reduce((acc, item) => item.price * item.quantity + acc, 0);
        }
    },
    actions: {
        addToCart(product: any, size: string | undefined = undefined, quantity?: number) {
            
            if(!this.isProductInCart(product, size)) { //If product not in cart yet
                
                this.cart.push({
                    id: product.id,
                    name: product.name,
                    color: product.color,
                    size,
                    quantity: 1,
                    images: product.images,
                    brand: product.brand,
                    price: product.price,
                    gender: product.gender,
                });
            } else {
                const productInstance = this.cart.find(item => item.id == product.id && item.size == size);
                if(productInstance) {
                    productInstance.quantity++;
                }
                
            }

            this.saveCartToLocalStorage();
            
        },
        isProductInCart(product: any, size: string | undefined, colors?: string[]) {
            return this.cart.find(item => {
               return item.id === product.id && item.size === size;
            });
        },
        setProductOnRemove(id: number, size: string | undefined) {
            let instance = this.cart.find(item => item.id == id && item.size == size);
            if(instance) {
                let {id, size} = instance;
                this.productOnRemove.id = id;
                this.productOnRemove.size = size;
            }
            
        },
        removeFromCart() {
            //Remove product from cart by id and size
            this.cart = this.cart.filter(item => {
                return !(item.id == this.productOnRemove.id && item.size == this.productOnRemove.size);
            });
            this.saveCartToLocalStorage();
            this.closeModal();

        },
        closeModal() {
            this.isModalOpened = false;
        },
        openModal() {
            this.isModalOpened = true;
        },
        initCartStorage() {
            //Get cart from localStorage if exists
            let storage = localStorage.getItem('cart');
            if(storage) {
                this.cart = JSON.parse(storage);
                return;
            } 
            //Else cart is empty
            this.cart = [];
            
            
        },
        saveCartToLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        openCheckout() {
            this.isCheckoutOpened = true;
        },
        closeCheckout() {
            this.isCheckoutOpened = false;
        }
    }
})