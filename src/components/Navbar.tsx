import { Home, Person, Search } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconButton sx={{ gap: 1 }}>
        <Home sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>QuickStay</Typography>
      </IconButton>

      <Stack
        direction={"row"}
        sx={{ gap: 4, display: { xs: "none", md: "flex" } }}
        color={"white"}
      >
        <Typography sx={{ ":hover": { color: "ThreeDShadow" } }}>
          Home
        </Typography>
        <Typography sx={{ ":hover": { color: "ThreeDShadow" } }}>
          Hotels
        </Typography>
        <Typography sx={{ ":hover": { color: "ThreeDShadow" } }}>
          Experience
        </Typography>
        <Typography sx={{ ":hover": { color: "ThreeDShadow" } }}>
          About
        </Typography>
      </Stack>

      <Stack direction={"row"} sx={{ gap: 2 }}>
        <IconButton>
          <Search sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <Person sx={{ color: "white" }} />
        </IconButton>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#18181B",
            borderRadius: "20px",
            px: 2,
            textTransform: "none",
            ":hover": { bgcolor: "#12581B" },
          }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};
