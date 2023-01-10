import { Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { navBarStyle } from '../styles/navBarStyle';

const Fooldal = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#999',
                    borderRadius: 10,
                    width: '70%',
                    m: 'auto',
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50
                }}
            >
                <Link style={navBarStyle} to={'books'}>
                    Könyvek
                </Link>
                <Link style={navBarStyle} to={'categories'}>
                    Kategóriák
                </Link>
                <Link style={navBarStyle} to={'authors'}>
                    Írók
                </Link>
            </Box>
            <Outlet />
        </>
    );
};

export default Fooldal;
