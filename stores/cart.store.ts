
export const useCartStore = defineStore('CartStore', {
    state: () => ({
        cart: <any[]>([]),   
    }),
    getters: {
        getCartCount: (state) => {
            let count = 0;
            return state.cart.reduce((acc, item) => item.quantity + acc, 0);
            
        }
    },
    actions: {
        addToCart(product: any, size: string | undefined = undefined, quantity?: number) {
            
            if(!this.isProductInCart(product, size)) { //If product not in cart yet
                
                this.cart.push({
                    id: product.id,
                    name: product.name,
                    colors: product.colors,
                    size,
                    quantity: 1,
                });
            } else {
                const productInstance = this.cart.find(item => item.id == product.id && item.size == size);
                productInstance.quantity++;
            }

            console.log(this.cart);
            
        },
        isProductInCart(product: any, size: string | undefined) {
            return this.cart.find(item => {
               return item.id === product.id && item.size === size;
            });
        }
    }
})