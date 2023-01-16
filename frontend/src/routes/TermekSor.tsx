import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { ProductInterface } from "../models/entities";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { useState } from "react";

const TermekSor = ({
  id,
  name,
  description,
  price,
  rerender,
}: ProductInterface) => {
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modCatName, setModCatName] = useState<string>(name);
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
            Biztos szeretnéd törölni a következő kategóriát '{name}'?
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
              //handleDeleteProduct();
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
            // onChange={handleModCategoryName}
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
              //handleDeleteCategory();
            }}
          >
            Létrehozás
          </Button>
        </Box>
      </Modal>
      <Typography sx={{ width: "10%", height: 30, m: "auto" }}>{id}</Typography>
      <Typography sx={{ width: "10%", height: 30, m: "auto" }}>
        {name}
      </Typography>
      <Typography sx={{ width: "50%", height: 30, m: "auto" }}>
        {description}
      </Typography>
      <Typography sx={{ width: "10%", height: 30, m: "auto" }}>
        {price} Ft
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
        onClick={() => setModalDelete(true)}
        variant="contained"
        startIcon={<DeleteForeverRoundedIcon />}
      >
        Törlés
      </Button>
    </>
  );
};
export default TermekSor;
