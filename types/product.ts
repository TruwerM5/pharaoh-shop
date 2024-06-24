export interface Product {
    id: number;
    name: string;
    category: string;
    gender: string;
    brand: string;
    color: string;
    images: string[];
    price: number;
    season: string;
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