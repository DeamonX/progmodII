export interface CategoryInterface {
    id?: number;
    label: string;
}

export interface AuthorInterface {
    id?: number;
    family_name: string;
    given_name: number;
    date_of_birth: string;
}

export interface BookInterface {
    id?: number;
    title: string;
    authorId: number;
    categoryId: number;
    price: number;
}
