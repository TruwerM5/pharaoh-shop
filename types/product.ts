export interface Product {
    id: number;
    name: string;
    category: string;
    gender: string;
    brand: string;
    colors: string[];
    images: string[];
    price: number;
    sizes?: string[];
}


export interface CartProduct extends Omit<Product, 'sizes'|'category'> {
    quantity: number;
    size?: string;
} 

export interface RemoveCartProduct {
    id: number;
    size: string | undefined;
}