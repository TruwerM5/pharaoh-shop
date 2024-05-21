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