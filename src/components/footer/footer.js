import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { CartUseContext } from "../../content/cart-contex";

export default function Footer() {
  const { id, setId, navigate } = CartUseContext();

  const position = {
    position: "fixed",
    left: "1%",
    bottom: "1%",
  };
  const logo = {
    fontSize: "50px",
    color: "orange",
  };
  function change() {
    setId(!id);
    if (id === true) {
      navigate("/admin");
    } else if (id === false) {
      navigate("/");
    }
  }
  return (
    <div style={position}>
      <ChangeCircleIcon style={logo} onClick={change} />
    </div>
  );
}
