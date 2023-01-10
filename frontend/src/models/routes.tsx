import { createBrowserRouter } from 'react-router-dom';
import Fooldal from '../routes/Fooldal';
import Kategoria from '../routes/Kategoria';
import Raktar from '../routes/Raktar';
import { categoryLoader, authorLoader, bookLoader } from './routeLoaders';
import Utanrendeles from '../routes/Utanrendeles';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Fooldal />,
        children: [
            {
                path: '/books',
                element: <Raktar />,
                loader: bookLoader
            },
            {
                path: '/authors',
                element: <Utanrendeles />,
                loader: authorLoader
            },
            {
                path: '/categories',
                element: <Kategoria />,
                loader: categoryLoader
            }
        ]
    }
]);
