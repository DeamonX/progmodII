import axios from 'axios';
import { Author, Book, Category } from '../models/entities';

axios.defaults.baseURL = 'http://localhost:1337/';

//Books
export const getBooks = () => {
    return axios.get<Response>('books');
};
export const getBookById = (bookId: number) => {
    return axios.get<Response>('books/' + bookId);
};
export const postBook = (book: Book) => {
    return axios.post<Response>('book', {
        title: book.title,
        authorId: book.authorId,
        categoryId: book.categoryId,
        price: book.price
    });
};
export const removeBook = (bookId: number) => {
    return axios.delete<Response>('book/' + bookId);
};
export const updateBook = (book: Book) => {
    return axios.put<Response>('book/' + book.id, {
        title: book.title,
        authorId: book.authorId,
        categoryId: book.categoryId,
        price: book.price
    });
};

//Author
export const getAuthors = () => {
    return axios.get<Response>('authors');
};
export const getAuthorByID = (authorId: number) => {
    return axios.get<Response>('author/' + authorId);
};
export const createAuthor = (author: Author) => {
    return axios.put<Response>('author', {
        family_name: author.family_name,
        given_name: author.given_name,
        date_of_birth: author.date_of_birth
    });
};
export const removeAuthor = (authorId: number) => {
    return axios.delete<Response>('author/' + authorId);
};
export const updateAuthor = (author: Author) => {
    return axios.put<Response>('author/' + author.id, {
        family_name: author.family_name,
        given_name: author.given_name,
        date_of_birth: author.date_of_birth
    });
};

//Category
export const getCategorys = () => {
    return axios.get<Response>('categorys');
};
export const getCategoryByID = (categoryId: number) => {
    return axios.get<Response>('category/' + categoryId);
};
export const createCategory = (category: Category) => {
    return axios.put<Response>('category', {
        label: category.label
    });
};
export const removeCategory = (categoryId: number) => {
    return axios.delete<Response>('category/' + categoryId);
};
export const updateCategory = (category: Category) => {
    return axios.put<Response>('category/' + category.id, {
        label: category.label
    });
};
