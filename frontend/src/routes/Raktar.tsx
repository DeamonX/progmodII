import { Box, Typography } from "@mui/material";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { StorageInterface } from "../models/entities";
import { noItemLink } from "../styles/raktarStyle";

const Raktar = () => {
  const storage = useLoaderData() as StorageInterface;

  return (
    <>
      {storage ? (
        <>
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
            <Link style={noItemLink} to="/utanrendeles">
              Nincs elem a raktárban, szeretnél felvenni?
            </Link>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ textAlign: "center", mt: 2, fontSize: 30 }}>
            Raktár
          </Typography>
          <Box
            sx={{
              m: "auto",
              mt: 5,
              p: 3,
              borderRadius: 5,
              textAlign: "center",
              width: 200,
              height: 100,
              backgroundColor: "#999",
            }}
          ></Box>
        </>
      )}
    </>
  );
};
export default Raktar;
