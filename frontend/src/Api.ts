import { Book } from "./entities"

export const getBooks = (): Promise<Book[]> => {
    return fetch('bookstore/books')
    .then((response) => response.json()) 
    .then((response) =>{return response as Book[]})
    .catch(err =>{
        console.error(err);
        return []
    })
}