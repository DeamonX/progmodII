import { getAuthors, getBooks, getCategorys } from '../backend/Api';

export const bookLoader = async () => {
    const { data } = await getBooks();
    return data;
};
export const categoryLoader = async () => {
    const { data } = await getCategorys();
    return data;
};
export const authorLoader = async () => {
    const { data } = await getAuthors();
    return data;
};
