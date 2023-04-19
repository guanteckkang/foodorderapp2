import { useEffect, useState } from "react";
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
import { v4 } from "uuid";
import axios from "axios";

export function AddMenu() {
  const original = {
    uid: v4(),
    name: "",
    sku: "",
    price: 0,
    description: "",
    url: "",
    display: true,
  };

  const { menu, setMenu } = CartUseContext();
  const [card, setCard] = useState(original);
  const { name, sku, price, description, url } = card;

  function resetvalue() {
    setCard(original);
  }

  function add(e) {
    e.preventDefault();
    const compareSKU = menu.findIndex((i) => {
      return i.sku === sku;
    });
    if (compareSKU === -1 && price >= 0) {
      setMenu((prev) => [...prev, card]);
      resetvalue();
      alert("Product added");
    } else if (price < 0 || price / 1 === isNaN) {
      alert("The price must be at least Rm 0 ");
    } else if (compareSKU > 0) {
      alert("Choose different SKU");
    } else {
      alert("Please input correct input in each section");
    }
  }

  function imageUpload(file) {
    console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cqaqrq5u");
    axios
      .post("http://api.cloudinary.com/v1_1/dfve48vyq/image/upload", formData)
      .then((res) => {
        console.log("upload completed");
        setCard({ ...card, url: res.data.url });
      })
      .catch((err) => alert(`Something when error \n ${err}`));
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
                setCard({ ...card, name: e.target.value });
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
                setCard({ ...card, sku: e.target.value });
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
              type="number"
              value={price}
              onChange={(e) => {
                setCard({ ...card, price: parseInt(e.target.value) });
              }}
            />
          </div>
        </div>
        <div className="field">
          <div className="label">
            <label>File:</label>
          </div>
          <div className="input">
            <input
              required
              // type="text"
              type="file"
              style={{ display: "inline-block" }}
              onChange={(e) => {
                imageUpload(e.target.files[0]);
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
                  {description ? description : "sample description"}
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
