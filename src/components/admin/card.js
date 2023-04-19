import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AirplayIcon from "@mui/icons-material/Airplay";
import DesktopAccessDisabledIcon from "@mui/icons-material/DesktopAccessDisabled";
import { ItemUseContext } from "../../content/item-contex";
import { CartUseContext } from "../../content/cart-contex";
import "./card.css";

export default function ItemCard({ info }) {
  const { sku, display, name, price, url, description } = info;
  const { handleOpen } = ItemUseContext();
  const { menu, setMenu } = CartUseContext();

  function displayItem() {
    const findItem = menu.findIndex((e) => {
      return e.sku === sku;
    });
    const updatedMenu = menu.map((each, i) => {
      if (i === findItem) {
        return {
          ...each,
          display: !display,
        };
      } else return each;
    });
    setMenu(updatedMenu);
  }

  return (
    <div className="card">
      <div className="cardmain">
        <div className="cardimage">
          <img src={url} alt={name} width="150px" />
        </div>
        <div className="cardtext">
          <h3>{name}</h3>
          <p>sku: {sku}</p>
          <p>Rm {price}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="cardbutton">
        <IconButton onClick={displayItem}>
          {display ? <AirplayIcon /> : <DesktopAccessDisabledIcon />}
        </IconButton>
        <IconButton
          onClick={() => {
            handleOpen(1, info);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            handleOpen(2, info);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}
