import { Card, CardMedia, Box, Typography, CardContent } from "@mui/material";

export default function BestSellerCard() {
  return (
    <Card
      sx={{
        position: "relative",
        width: 300,
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="200"
        image="src/assets/hote2.jpg"
        alt="Product Image"
      />

      {/* Best Seller label */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          backgroundColor: "coral",
          color: "white",
          paddingX: 1.5,
          paddingY: 0.5,
          borderRadius: 2,
          fontSize: "0.75rem",
          fontWeight: "bold",
        }}
      >
        Best Seller
      </Box>

      {/* Card Content (optional) */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Product Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $49.99
        </Typography>
      </CardContent>
    </Card>
  );
}
