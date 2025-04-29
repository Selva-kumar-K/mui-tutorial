import { Box, Stack, Typography } from "@mui/material";

export const HeroSection = () => {
  return (
    <Box mt={10}>
      <Typography
        sx={{
          bgcolor: "slateblue",
          color: "white",
          display: "inline-block",
          px: 1,
          py: 0.5,
          borderRadius: 4,
          fontSize: "16",
          mb: 2
        }}
      >
        The Ultimate Hotel Experience
      </Typography>
      <Stack gap={2}>
        <Typography
          sx={{
            fontWeight: "medium",
            color: "white",
            fontSize: {
              xs: "1.5rem", // for small screens (mobile)
              sm: "2rem", // for tablets
              md: "2.5rem", // for desktops
              lg: "3.5rem", // for large desktops
            },
          }}
          maxWidth={"sm"}
        >
          Discover Your Perfect Getaway Destination
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "wheat" }} maxWidth={"sm"}>
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </Typography>
      </Stack>
    </Box>
  );
};
