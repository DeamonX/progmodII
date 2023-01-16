import { createBrowserRouter } from 'react-router-dom';
import Fooldal from '../routes/Home';
import { categoryLoader, authorLoader, bookLoader } from './routeLoaders';
import React from 'react';
import Book from '../routes/Book';
import Author from '../routes/Author';
import Category from '../routes/Category';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Fooldal />,
        children: [
            {
                path: '/books',
                element: <Book />,
                loader: bookLoader
            },
            {
                path: '/authors',
                element: <Author />,
                loader: authorLoader
            },
            {
                path: '/categories',
                element: <Category />,
                loader: categoryLoader
            }
        ]
    }
]);
