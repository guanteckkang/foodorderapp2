import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartUseContext } from "../../content/cart-contex";
import reverse from "../../img/reverse.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

export default function Header({ id, setId }) {
  const { cart, showmodal } = CartUseContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (id === null) {
      navigate("/");
    }
  }, []);

  function back() {
    navigate("/");
    setId(null);
  }
  function change() {
    setId(!id);
    if (id === true) {
      navigate("/admin");
    } else if (id === false) {
      navigate("/user");
    }
  }
  return (
    <AppBar position="sticky" sx={style}>
      <Toolbar>
        <img
          src={reverse}
          alt=""
          width="50px"
          disabled
          onClick={back}
          style={{ cursor: "pointer" }}
        />

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "default" }}
          onClick={back}
          style={{ cursor: "pointer" }}
        >
          WcDonalds
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          id="headermiddle"
        >
          {id === null ? (
            <></>
          ) : id === true ? (
            <span onClick={change}>Menu</span>
          ) : (
            <span onClick={change}> Item </span>
          )}
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
            id="welcoming"
          >
            Contact
          </button>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            id="smallicon"
          >
            <ContactPageIcon />
          </button>
          <button
            onClick={() => {
              navigate("/aboutus");
            }}
            id="welcoming"
          >
            About Us
          </button>
          <button
            onClick={() => {
              navigate("/aboutus");
            }}
            id="smallicon"
          >
            <InfoIcon />
          </button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
