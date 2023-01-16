import { Modal, Box, Typography, TextField, Button, Divider } from '@mui/material';
import React from 'react';
import { useState, ChangeEvent } from 'react';
import { useLoaderData } from 'react-router';
import { getBooks, postBook } from '../backend/Api';
import { AuthorInterface, BookInterface, CategoryInterface } from '../models/entities';
import BookRow from './BookRow';

const Book = () => {
    const [books, setBooks] = useState<BookInterface[]>(useLoaderData() as unknown as BookInterface[]);
    const [newBookTitle, setNewBookTitle] = useState<string>('');
    const [newBookAuthor, setNewBookAuthor] = useState<AuthorInterface>({} as AuthorInterface);
    const [newBookCategory, setNewBookCategory] = useState<CategoryInterface>({} as CategoryInterface);
    const [newBookPrice, setNewBookPrice] = useState<number>(500);

    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleReRender = async () => {
        const { data } = await getBooks();
        setBooks(data as unknown as BookInterface[]);
    };

    const handleCreateNewBook = async () => {
        await postBook({
            title: newBookTitle,
            authorId: newBookAuthor.id,
            categoryId: newBookCategory.id,
            price: newBookPrice
        } as BookInterface);
        setBooks([...books, { title: newBookTitle, authorId: newBookAuthor.id as number, categoryId: newBookCategory.id as number, price: newBookPrice }]);
    };
    return (
        <>
            <Modal
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                }}
            >
                <>
                    <Box
                        sx={{
                            width: 'fit-content',
                            minHeight: 100,
                            bgcolor: '#888',
                            m: 'auto',
                            mt: 50,
                            p: 3,
                            borderRadius: 5
                        }}
                    >
                        <Typography sx={{ textAlign: 'left', mb: 5, fontSize: 20 }}>Új termék létrehozása</Typography>
                        <TextField
                            onChange={(e) => {
                                setNewBookTitle(e.target.value as string);
                            }}
                            sx={{
                                '& label.Mui-focused': {
                                    color: 'black'
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: 'black'
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'black'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    }
                                },
                                mr: 5
                            }}
                            required
                            variant="standard"
                            label="Könyv neve"
                            defaultValue="Új könyv"
                        />
                        <TextField
                            onChange={(e) => {
                                // setNewBookAuthor({} as AuthorInterface);
                            }}
                            sx={{
                                '& label.Mui-focused': {
                                    color: 'black'
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: 'black'
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'black'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    }
                                },

                                mr: 5
                            }}
                            required
                            variant="standard"
                            label="Könyv írója"
                            defaultValue=""
                        />
                        <TextField
                            onChange={(e) => {
                                //setNewBookCategory(e.target.value);
                            }}
                            sx={{
                                '& label.Mui-focused': {
                                    color: 'black'
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: 'black'
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'black'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    }
                                }
                            }}
                            required
                            variant="standard"
                            label="Könyv kategóriája"
                            defaultValue=""
                        />

                        <Button
                            sx={{
                                display: 'flex',
                                m: 'auto',
                                mt: 5,
                                textAlign: 'left',
                                backgroundColor: '#666',
                                color: '#000',
                                '&:hover': {
                                    bgcolor: '#999'
                                }
                            }}
                            variant="contained"
                            onClick={() => {
                                handleCreateNewBook();
                                setOpenModal(false);
                            }}
                        >
                            Létrehozás
                        </Button>
                    </Box>
                </>
            </Modal>
            <Box
                sx={{
                    m: 'auto',
                    mt: 5,
                    p: 3,
                    borderRadius: 5,
                    textAlign: 'center',
                    width: '70%',
                    minHeight: 50,
                    height: 'fit-content',
                    backgroundColor: '#999'
                }}
            >
                <Typography sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: 20 }}>Termékek</Typography>
                <Button
                    sx={{
                        float: 'right',
                        mt: -4,
                        backgroundColor: '#888',
                        color: '#000',
                        '&:hover': {
                            bgcolor: '#999'
                        }
                    }}
                    variant="contained"
                    onClick={() => {
                        setOpenModal(true);
                    }}
                >
                    Új termék létrehozása
                </Button>
                <Divider sx={{ mt: 5 }} />
                <Box sx={{ display: 'flex', m: 'auto', mt: 2, width: '100%' }}>
                    <Typography sx={{ display: 'inline', width: '18%', height: 30 }}>Id</Typography>
                    <Typography sx={{ display: 'inline', height: 30, width: '18%', m: 'auto' }}>Megnevezés</Typography>
                    <Typography sx={{ display: 'inline', height: 30, width: '50%', m: 'auto' }}>Leírás</Typography>
                    <Typography sx={{ display: 'inline', height: 30, width: '22%', m: 'auto' }}>Ár</Typography>
                </Box>
                {books.map((book, key) => {
                    return (
                        <Box key={key} sx={{ display: 'flex', m: 'auto', mt: 5, width: '90%' }}>
                            <BookRow title={book.title} authorId={book.authorId} categoryId={book.categoryId} price={book.price} />
                        </Box>
                    );
                })}
            </Box>
        </>
    );
};
export default Book;
