import { useNavigate } from "react-router-dom";
import { CartUseContext } from "../../content/cart-contex";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

export const Footer = ({ id, setId }) => {
  const { showmodal, cart } = CartUseContext();
  const navigate = useNavigate();

  const mainstyle = {
    position: "fixed",
    right: "3%",
    bottom: "10%",
    marginBottom: "10px",
  };
  const style = {
    position: "absolute",
    color: "red",
    fontSize: "30px",
    right: "10px",
    bottom: "4vh",
  };
  const style2 = {
    color: "red",
    position: "fixed",
    left: "3%",
    bottom: "5%",
  };
  return (
    <div style={mainstyle}>
      {/* {id === true ? (
        <div onClick={showmodal}>
          <span style={style}>{cart.length}</span>
          <ShoppingCartIcon color="warning" fontSize="large" />
        </div>
      ) : (
        <></>
      )} */}
      {/* {id === null ? (
        <></>
      ) : (
        <ChangeCircleIcon
          fontSize="large"
          color="warning"
          sx={style2}
          onClick={() => {
            if (id === true) {
              setId(!id);
              navigate("/admin");
            } else if (id === false) {
              setId(!id);
              navigate("/user");
            }
          }}
        />
      )} */}
    </div>
  );
};
