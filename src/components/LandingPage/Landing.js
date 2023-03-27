import hero from "../../img/hero.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import "./landing.css";

const enter = {
  cursor: "pointer",
};

export function LandingPage({ setId }) {
  const navigate = useNavigate();
  return (
    <div id="mainlanding">
      <div id="maintext">
        <h1 id="header">WELCOME TO WcDONALDS</h1>
        <div style={{ width: "50%" }} id="text">
          <h3>
            We serve fresh food accommodate with peaceful enviroment for you and
            your family to enjoy delicious meal.
          </h3>
          <h3>
            We also serve multiple enjoyable food selection that would
            definitely suit yours and your family taste bud.
          </h3>
          <h3>
            We server good food at affordable price. In light of the increasing
            finance problem facing by everyone, we take the opportunities to
            serve good food and cheaper prices so everyone can enjoy to their
            heart content.
          </h3>
        </div>
        <h1
          style={enter}
          onClick={() => {
            navigate("/user");
            setId(true);
          }}
          id="enter"
        >
          <ArrowForwardIcon />
          ENTER
          <ArrowBackIcon />
        </h1>
      </div>
      <img src={hero} alt="broken imgage" width="100%" />
      <h4
        style={{ margin: "0", textAlign: "right", paddingRight: "10px" }}
        id="landingcredit"
      >
        ©credit to GTK
      </h4>
    </div>
  );
}
