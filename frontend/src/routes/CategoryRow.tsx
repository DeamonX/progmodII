import { Typography, Button, Modal, Box, TextField } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useState } from 'react';
import React from 'react';
import { CategoryInterface } from '../models/entities';
import { removeCategory, updateCategory } from '../backend/Api';

const CategoryRow = ({ id, label }: CategoryInterface) => {
    const [modalDelete, setModalDelete] = useState<boolean>(false);
    const [modalEdit, setModalEdit] = useState<boolean>(false);
    const [modCatLabel, setModCatLabel] = useState<string>(label);
    const handleChangeCategory = async () => {
        const res = await updateCategory({ id: id, label: modCatLabel });
    };
    const handleDeleteCategory = async () => {
        const res = await removeCategory(id as number);
    };

    return (
        <>
            <Modal onClose={() => setModalDelete(false)} open={modalDelete}>
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
                    component={'form'}
                >
                    <>
                        <Typography sx={{ textAlign: 'left', mb: 5, fontSize: 20 }}>Biztos szeretnéd törölni a következő terméket '{label}'?</Typography>
                        <Button
                            sx={{
                                display: 'inline',
                                mr: 5,
                                ml: 18,
                                textAlign: 'center',
                                backgroundColor: '#666',
                                color: '#000',
                                '&:hover': {
                                    bgcolor: '#999'
                                }
                            }}
                            variant="contained"
                            onClick={() => {
                                handleDeleteCategory();
                                setModalDelete(false);
                            }}
                        >
                            Igen
                        </Button>
                        <Button
                            sx={{
                                display: 'inline',
                                textAlign: 'left',
                                backgroundColor: '#666',
                                color: '#000',
                                '&:hover': {
                                    bgcolor: '#999'
                                }
                            }}
                            variant="contained"
                            onClick={() => {
                                setModalDelete(false);
                            }}
                        >
                            Nem
                        </Button>
                    </>
                </Box>
            </Modal>
            <Modal onClose={() => setModalEdit(false)} open={modalEdit}>
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
                    component={'form'}
                >
                    <Typography sx={{ textAlign: 'left', mb: 5, fontSize: 20 }}>Kategória módosítása</Typography>
                    <TextField
                        onChange={(e) => {
                            setModCatLabel(e.target.value);
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
                        defaultValue={modCatLabel}
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
                            handleChangeCategory();
                            setModalEdit(false);
                        }}
                    >
                        Módosítás
                    </Button>
                </Box>
            </Modal>
            <Typography sx={{ width: '25%', height: 30, m: 'auto' }}>{id}</Typography>
            <Typography sx={{ width: '75%', height: 30, m: 'auto' }}>{label}</Typography>
            <Button
                sx={{
                    height: 30,
                    fontSize: 10,
                    bgcolor: '#888',
                    '&:hover': {
                        bgcolor: '#999'
                    }
                }}
                onClick={() => setModalEdit(true)}
                variant="contained"
                startIcon={<SettingsIcon />}
            >
                Módosítás
            </Button>
            <Button
                sx={{
                    ml: 2,
                    height: 30,
                    fontSize: 10,
                    bgcolor: '#888',
                    '&:hover': {
                        bgcolor: '#999'
                    }
                }}
                onClick={() => setModalEdit(true)}
                variant="contained"
                startIcon={<DeleteForeverRoundedIcon />}
            >
                Törlés
            </Button>
        </>
    );
};

export default CategoryRow;
