import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CartUseContext } from "../../content/cart-contex";
import "./CardList.css";

export default function CardList({ info }) {
  const { addItem, removeItem, cart } = CartUseContext();
  const { name, price, url, description } = info;

  const findItem = cart.find((e) => {
    return e.name === name;
  });

  const buttoninside = {
    color: "white",
    margin: "auto",
    justifyContent: "center",
    fontSize: "larger",
  };

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: " space-between",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          style={{ width: "151px" }}
          image={url}
          alt={name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" style={{ color: "red" }}>
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Rm {price}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "justify",
          pl: 1,
          pb: 1,
          flexDirection: "column",
          width: "10%",
          backgroundColor: `${!findItem ? "blue" : "red"}`,
        }}
        onClick={() => {
          !findItem ? addItem({ info }) : removeItem({ info });
        }}
      >
        <div style={buttoninside}>
          {!findItem ? "Add To Card" : "Remove From Cart"}
        </div>
      </Box>
    </Card>
  );
}
