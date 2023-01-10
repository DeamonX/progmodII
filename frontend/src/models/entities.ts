export interface Category {
    id?: number;
    label: string;
}

export interface Author {
    id?: number;
    family_name: string;
    given_name: number;
    date_of_birth: string;
}

export interface Book {
    id?: number;
    title: string;
    authorId: number;
    categoryId: number;
    price: number;
}
