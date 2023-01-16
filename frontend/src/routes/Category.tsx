import { Box, Button, Divider, Modal, TextField, Typography } from '@mui/material';
import React from 'react';
import { ChangeEvent, useState } from 'react';
import { useLoaderData } from 'react-router';
import { createCategory, getCategorys } from '../backend/Api';
import { CategoryInterface } from '../models/entities';
import CategoryRow from './CategoryRow';

const Category = () => {
    const [categories, setCategories] = useState<CategoryInterface[]>(useLoaderData() as CategoryInterface[]);
    const [newCategory, setNewCategory] = useState<CategoryInterface>({} as CategoryInterface);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleCreateNewCategory = async () => {
        await createCategory(newCategory);
        handleReRender();
    };
    const handleReRender = async () => {
        const { data } = await getCategorys();
        setCategories(data as unknown as CategoryInterface[]);
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
                        <Typography sx={{ textAlign: 'left', mb: 5, fontSize: 20 }}>Új kategória létrehozása</Typography>
                        <TextField
                            onChange={(e) => {
                                setNewCategory({ label: e.target.value });
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
                            label="Kategória neve"
                            defaultValue="Új Kategória"
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
                                handleCreateNewCategory();
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
                <Typography sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: 20 }}>Kategóriák</Typography>
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
                    Új kategória létrehozása
                </Button>
                <Divider sx={{ mt: 5 }} />
                {categories.map((category, key) => {
                    return (
                        <Box key={key} sx={{ display: 'flex', m: 'auto', mt: 5, width: '100%' }}>
                            <CategoryRow label={category.label} />
                        </Box>
                    );
                })}
            </Box>
        </>
    );
};
export default Category;
