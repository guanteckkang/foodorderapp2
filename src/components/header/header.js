import { AppBar, Toolbar, Typography } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartUseContext } from "../../content/cart-contex";
import reverse from "../../img/reverse.png";
import "./header.css";

const style = {
  color: "red",
  backgroundColor: "rgba(249, 180, 45, 0.9)",
};
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const { id, cart, showmodal, navigate } = CartUseContext();

  return (
    <AppBar position="sticky" sx={style}>
      <Toolbar>
        <img src={reverse} alt="" width="50px" disabled />

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          WcDonalds
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          id="headermiddle"
        >
          {id === true ? <span>Welcome</span> : <span> Menu Management </span>}
        </Typography>
        {id === true ? (
          <IconButton aria-label="cart" onClick={showmodal}>
            <StyledBadge badgeContent={cart.length} color="warning">
              <ShoppingCartIcon style={{ color: "red" }} />
            </StyledBadge>
          </IconButton>
        ) : (
          <></>
        )}
        <div id="headerbutton">
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="welcoming"
          >
            Contact
          </button>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="smallicon"
          >
            <ContactPageIcon />
          </button>
          <button
            onClick={() => {
              navigate("/aboutus");
            }}
            className="welcoming"
          >
            About Us
          </button>
          <button
            onClick={() => {
              navigate("/aboutus");
            }}
            className="smallicon"
          >
            <InfoIcon />
          </button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
