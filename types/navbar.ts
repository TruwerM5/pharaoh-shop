

export interface NavbarList {
    id: number;
    title: string;
    type: string;
    categories: Category[],
}

export interface Category {
    id: number;
    category: string;
    title: string;
}
