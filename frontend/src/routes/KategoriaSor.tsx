import { Typography, Button, Modal, Box, TextField } from "@mui/material";
import { CategoryInterface } from "../models/entities";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { ChangeEvent, useState } from "react";
import { deleteCategory, modifyCategory } from "../backend/Api";

const KategoriaSor = ({ id, name, rerender }: CategoryInterface) => {
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modCatName, setModCatName] = useState<string>(name);
  const handleChangeCategory = async () => {
    const res = await modifyCategory({ id: id, name: modCatName });
    rerender?.();
  };
  const handleModCategoryName = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setModCatName(e.target.value as string);
  };
  const handleDeleteCategory = async () => {
    const res = await deleteCategory(id);
    rerender?.();
  };

  return (
    <>
      <Modal onClose={() => setModalDelete(false)} open={modalDelete}>
        <Box
          sx={{
            width: "fit-content",
            minHeight: 100,
            bgcolor: "#888",
            m: "auto",
            mt: 50,
            p: 3,
            borderRadius: 5,
          }}
          component={"form"}
        >
          <Typography sx={{ textAlign: "left", mb: 5, fontSize: 20 }}>
            Biztos szeretnéd törölni a következő terméket '{name}'?
          </Typography>
          <Button
            sx={{
              display: "inline",
              mr: 5,
              ml: 18,
              textAlign: "center",
              backgroundColor: "#666",
              color: "#000",
              "&:hover": {
                bgcolor: "#999",
              },
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
              display: "inline",
              textAlign: "left",
              backgroundColor: "#666",
              color: "#000",
              "&:hover": {
                bgcolor: "#999",
              },
            }}
            variant="contained"
            onClick={() => {
              setModalDelete(false);
            }}
          >
            Nem
          </Button>
        </Box>
      </Modal>
      <Modal onClose={() => setModalEdit(false)} open={modalEdit}>
        <Box
          sx={{
            width: "fit-content",
            minHeight: 100,
            bgcolor: "#888",
            m: "auto",
            mt: 50,
            p: 3,
            borderRadius: 5,
          }}
          component={"form"}
        >
          <Typography sx={{ textAlign: "left", mb: 5, fontSize: 20 }}>
            Kategória módosítása
          </Typography>
          <TextField
            onChange={handleModCategoryName}
            sx={{
              "& label.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
            required
            variant="standard"
            label="Kategória neve"
            defaultValue={modCatName}
          />
          <Button
            sx={{
              display: "flex",
              m: "auto",
              mt: 5,
              textAlign: "left",
              backgroundColor: "#666",
              color: "#000",
              "&:hover": {
                bgcolor: "#999",
              },
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
      <Typography sx={{ width: "25%", height: 30, m: "auto" }}>{id}</Typography>
      <Typography sx={{ width: "75%", height: 30, m: "auto" }}>
        {name}
      </Typography>
      <Button
        sx={{
          height: 30,
          fontSize: 10,
          bgcolor: "#888",
          "&:hover": {
            bgcolor: "#999",
          },
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
          bgcolor: "#888",
          "&:hover": {
            bgcolor: "#999",
          },
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

export default KategoriaSor;
