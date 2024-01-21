import "./App.css";

import Button from "@mui/material/Button";
import Test from "./components/Test";
import React from "react";
import Resturant from "./components/resturant/Resturant";
import { Box, Container } from "@mui/material";
import { blueGrey, cyan } from "@mui/material/colors";

function App() {
  return (
    <Container maxWidth="xl" style={{ backgroundColor: cyan[100] }}>
      <Box
        sx={{
          bgcolor: cyan[100],
          // color: "white",
          border: "none",
          width: "100%",
          // maxWidth: "lg",
          paddingTop: "20px",
          marginTop: "0",
          // height: "200vh",
          maxHeight: "auto",
          // margin: "0",
        }}
      >
        <Resturant />
        <Test />
      </Box>
    </Container>
  );
}

export default App;
