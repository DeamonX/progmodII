import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useState, ChangeEvent } from "react";
import { useLoaderData } from "react-router";
import { getProducts, postProduct } from "../backend/Api";
import { ProductInterface, ProductLoaderInterface } from "../models/entities";
import TermekSor from "./TermekSor";

const Termek = () => {
  const [termekek, setTermekek] = useState<ProductInterface[]>(
    (useLoaderData() as ProductLoaderInterface).products
  );
  const [ujTermekNev, setUjTermekNev] = useState<string>("");
  const [ujTermekLeiras, setUjTermekLeiras] = useState<string>("");
  const [ujTermekAr, setUjTermekAr] = useState<number>(500);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleReRender = async () => {
    const { data } = await getProducts();
    setTermekek(data as unknown as ProductInterface[]);
  };

  const handleNewProductNameChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUjTermekNev(e.target.value as string);
  };
  const handleNewProductDescChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUjTermekLeiras(e.target.value as string);
  };
  const handleNewProductPriceChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUjTermekAr(e.target.value as unknown as number);
  };

  const handleCreateNewProduct = async () => {
    await postProduct({
      name: ujTermekNev,
      description: ujTermekLeiras,
      price: ujTermekAr,
    });
    setTermekek([
      ...termekek,
      {
        name: ujTermekNev,
        description: ujTermekLeiras,
        price: ujTermekAr,
      },
    ]);
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
              width: "fit-content",
              minHeight: 100,
              bgcolor: "#888",
              m: "auto",
              mt: 50,
              p: 3,
              borderRadius: 5,
            }}
          >
            <Typography sx={{ textAlign: "left", mb: 5, fontSize: 20 }}>
              Új termék létrehozása
            </Typography>
            <TextField
              onChange={handleNewProductNameChange}
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
                mr: 5,
              }}
              required
              variant="standard"
              label="Termék neve"
              defaultValue="Új termék"
            />
            <TextField
              onChange={handleNewProductDescChange}
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

                mr: 5,
              }}
              required
              variant="standard"
              label="Termék leírása"
              defaultValue="Leírás"
            />
            <TextField
              onChange={handleNewProductPriceChange}
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
              label="Termék ára"
              defaultValue="500"
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
                handleCreateNewProduct();
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
          m: "auto",
          mt: 5,
          p: 3,
          borderRadius: 5,
          textAlign: "center",
          width: "70%",
          minHeight: 50,
          height: "fit-content",
          backgroundColor: "#999",
        }}
      >
        <Typography
          sx={{ textAlign: "left", fontWeight: "bold", fontSize: 20 }}
        >
          Termékek
        </Typography>
        <Button
          sx={{
            float: "right",
            mt: -4,
            backgroundColor: "#888",
            color: "#000",
            "&:hover": {
              bgcolor: "#999",
            },
          }}
          variant="contained"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Új termék létrehozása
        </Button>
        <Divider sx={{ mt: 5 }} />
        <Box sx={{ display: "flex", m: "auto", mt: 2, width: "100%" }}>
          <Typography sx={{ display: "inline", width: "18%", height: 30 }}>
            Id
          </Typography>
          <Typography
            sx={{ display: "inline", height: 30, width: "18%", m: "auto" }}
          >
            Megnevezés
          </Typography>
          <Typography
            sx={{ display: "inline", height: 30, width: "50%", m: "auto" }}
          >
            Leírás
          </Typography>
          <Typography
            sx={{ display: "inline", height: 30, width: "22%", m: "auto" }}
          >
            Ár
          </Typography>
        </Box>
        {termekek.map((termek, key) => {
          return (
            <Box
              key={key}
              sx={{ display: "flex", m: "auto", mt: 5, width: "90%" }}
            >
              <TermekSor
                id={termek.id}
                name={termek.name}
                description={termek.description}
                price={termek.price}
                rerender={handleReRender}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};
export default Termek;
