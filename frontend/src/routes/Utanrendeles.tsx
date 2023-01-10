import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { getProducts } from "../backend/Api";
import { ProductInterface, ProductLoaderInterface } from "../models/entities";
import { noItemLink } from "../styles/raktarStyle";

const Utanrendeles = () => {
  const prod = useLoaderData() as ProductLoaderInterface;
  const [termekek, setTermekek] = useState<ProductInterface[]>(prod.products);
  const handleRender = () => {
    if (!prod.categories) {
      return (
        <Box
          sx={{
            m: "auto",
            mt: 5,
            p: 3,
            borderRadius: 5,
            textAlign: "center",
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "#999",
          }}
        >
          <Link style={noItemLink} to="/kategoria">
            Nincs az adatbázisban kategória! Hozz létre egyet itt!
          </Link>
        </Box>
      );
    } else if (!prod.products) {
      return (
        <Box
          sx={{
            m: "auto",
            mt: 5,
            p: 3,
            borderRadius: 5,
            textAlign: "center",
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "#999",
          }}
        >
          <Link style={noItemLink} to="/termek">
            Nincs az adatbázisban termék! Hozz létre egyet itt!
          </Link>
        </Box>
      );
    } else {
      return (
        <>
          <Typography sx={{ textAlign: "center", mt: 2, fontSize: 30 }}>
            Utánrendelés
          </Typography>
          <Box
            sx={{
              p: 3,
              m: "auto",
              mt: 5,
              borderRadius: 5,
              textAlign: "center",
              width: "60%",
              height: 100,
              backgroundColor: "#999",
            }}
          ></Box>
        </>
      );
    }
  };
  return <>{handleRender()}</>;
};

export default Utanrendeles;
