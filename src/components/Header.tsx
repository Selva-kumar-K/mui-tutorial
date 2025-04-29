import { Box, Container } from "@mui/material";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";

export const Header = () => {
  return (
    <Box sx={{position: "relative", width: "100%", height: "100vh", bgcolor: "crimson"}}>
      <Container sx={{position: "absolute", top: 0, mt: 2 }} maxWidth="xl" >
        <Navbar />
        <HeroSection/>
      </Container>
    </Box>
  );
};
