import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CartUseContext } from "../../content/cart-contex";
import { useContext, useEffect, useState, useMemo } from "react";
import "./CardList.css";
export default function CardList({ info }) {
  const { addItem, removeItem, cart } = CartUseContext();
  const { name, description, price, url, quantity, sku } = info;

  const findItem = cart.find((e) => {
    return e.name == name;
  });

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
              Quantity: {quantity}
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
        }}
        id="usercardbox"
      >
        <IconButton
          style={{ height: "50%", color: "red", alignItems: "center" }}
          disabled
        >
          {!findItem ? 0 : findItem.quantity}
        </IconButton>
        <div
          style={{
            height: "50%",
            textAlign: "space-around",
          }}
        >
          <IconButton
            style={{ color: "blue", width: "50%" }}
            onClick={() => {
              removeItem({ info });
            }}
            disabled={findItem == undefined}
          >
            -
          </IconButton>
          <IconButton
            style={{ color: "blue", width: "50%" }}
            onClick={() => {
              addItem({ info });
            }}
            disabled={quantity === 0}
          >
            +
          </IconButton>
        </div>
      </Box>
    </Card>
  );
}
