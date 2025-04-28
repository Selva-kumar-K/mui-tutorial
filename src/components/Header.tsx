import { Box, Container } from "@mui/material";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <Box sx={{position: "relative", width: "100%"}}>

      <img src="src/assets/blue.png" alt="hotel-img" width={"100%"}/>
      <Container sx={{position: "absolute", top: 0, mt: 2 }} maxWidth="xl" >
        <Navbar />
      </Container>
    </Box>
  );
};
