import { Box, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthorInterface } from '../models/entities';
import { noItemLink } from '../styles/raktarStyle';

const Author = () => {
    const [authors, setAuthors] = useState<AuthorInterface[]>(useLoaderData() as unknown as AuthorInterface[]);
    const handleRender = () => {
        if (authors.length === 0) {
            return (
                <Box
                    sx={{
                        m: 'auto',
                        mt: 5,
                        p: 3,
                        borderRadius: 5,
                        textAlign: 'center',
                        width: 'fit-content',
                        height: 'fit-content',
                        backgroundColor: '#999'
                    }}
                >
                    <Link style={noItemLink} to="/kategoria">
                        Nincs az adatbázisban író! Hozz létre egyet itt!
                    </Link>
                </Box>
            );
        } else {
            return (
                <>
                    <Typography sx={{ textAlign: 'center', mt: 2, fontSize: 30 }}>Írók</Typography>
                    <Box
                        sx={{
                            p: 3,
                            m: 'auto',
                            mt: 5,
                            borderRadius: 5,
                            textAlign: 'center',
                            width: '60%',
                            height: 100,
                            backgroundColor: '#999'
                        }}
                    ></Box>
                </>
            );
        }
    };
    return <>{handleRender()}</>;
};

export default Author;
