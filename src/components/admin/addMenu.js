import { useState } from "react";
import { CartUseContext } from "../../content/cart-contex";
import AirplayIcon from "@mui/icons-material/Airplay";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./addMenu.css";
import { v4 as uuidv4 } from "uuid";

export function AddMenu() {
  const { menu, setMenu } = CartUseContext();
  const [card, setCard] = useState({
    name: "",
    sku: "",
    price: 0,
    quantity: 0,
    description: "",
    url: "",
    display: true,
  });
  const { name, sku, price, quantity, description, url } = card;
  const uid = uuidv4();
  function resetvalue() {
    setCard({
      uid: uid,
      name: "",
      sku: "",
      price: 0,
      quantity: 0,
      description: "",
      url: "",
      display: true,
    });
    console.log(uid);
  }

  function add(e) {
    e.preventDefault();
    const compareSKU = menu.findIndex((i) => {
      return i.sku === sku;
    });
    let asdas = "fsadf";
    console.log(asdas / 1);
    if (compareSKU === -1 && price >= 0 && quantity > 0) {
      setMenu((prev) => [...prev, card]);
      resetvalue();
      alert("Product added");
    } else if (price < 0 || price / 1 === isNaN) {
      alert("The price must be at least Rm 0 ");
    } else if (quantity <= 0 || quantity / 1 === isNaN) {
      alert("The quantity must be at least 1 ");
    } else if (compareSKU > 0) {
      alert("Choose different SKU");
    } else {
      alert("Please input correct input in each section");
    }
  }

  return (
    <form onSubmit={add} id="addform">
      <div id="formfield">
        <div className="field">
          <div className="label">
            <label>Name:</label>
          </div>
          <div className="input">
            <input
              required
              type="text"
              value={name}
              onChange={(e) => {
                setCard((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
              placeholder="name"
            />
          </div>
        </div>
        <div className="field">
          <div className="label">
            <label>SKU:</label>
          </div>
          <div className="input">
            <input
              required
              type="text"
              value={sku}
              onChange={(e) => {
                setCard((prev) => {
                  return { ...prev, sku: e.target.value };
                });
              }}
              placeholder="sku"
            />
          </div>
        </div>
        <div className="field">
          <div className="label">
            <label>Price:</label>
          </div>
          <div className="input">
            <input
              required
              type="price"
              value={price}
              onChange={(e) => {
                setCard((prev) => {
                  return { ...prev, price: e.target.value };
                });
              }}
              placeholder="Price"
            />
          </div>
        </div>
        <div className="field">
          <div className="label">
            <label>Quantity:</label>
          </div>
          <div className="input">
            <input
              required
              type="number"
              value={quantity}
              onChange={(e) => {
                setCard((prev) => {
                  return { ...prev, quantity: e.target.value };
                });
              }}
              placeholder="quantity"
            />
          </div>
        </div>

        <div className="field">
          <div className="label">
            <label>URL:</label>
          </div>
          <div className="input">
            <input
              required
              type="text"
              value={url}
              onChange={(e) => {
                setCard((prev) => {
                  return { ...prev, url: e.target.value };
                });
              }}
              placeholder="url"
            />
          </div>
        </div>
        <div className="field">
          <div className="label">
            <label>Description:</label>
          </div>
          <div className="input">
            <textarea
              required
              type="text"
              value={description}
              onChange={(e) => {
                setCard((prev) => {
                  return { ...prev, description: e.target.value };
                });
              }}
              placeholder="description"
            />
          </div>
        </div>
      </div>
      <div id="form2">
        <div id="displaycard">
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              style={{ width: "151px" }}
              image={url}
              alt="sample img"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6">
                  {name ? name : "sample"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  sku: {sku ? sku : "sample"}
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
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton>
                  <AirplayIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Card>
        </div>
        <div id="addbuttonbox">
          <div style={{ textAlign: "center" }}>
            <button id="addbutton">Add</button>
          </div>
        </div>
      </div>
    </form>
  );
}
