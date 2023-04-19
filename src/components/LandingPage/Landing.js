import hero from "../../img/hero.jpg";
import "./landing.css";

export function LandingPage() {
  return (
    <div id="mainlanding">
      <div id="maintext">
        <h1 id="header">WELCOME TO WcDONALDS</h1>
        <div id="text">
          <h2>
            We serve fresh food accommodate with peaceful enviroment for you and
            your family to enjoy delicious meal.
          </h2>
          <h2>
            We also serve multiple enjoyable food selection that would
            definitely suit yours and your family taste bud.
          </h2>
          <h2>
            We server good food at affordable price. In light of the increasing
            finance problem facing by everyone, we take the opportunities to
            serve good food and cheaper prices so everyone can enjoy to their
            heart content.
          </h2>
        </div>
      </div>
      <img src={hero} alt="broken imgage" width="100%" />
    </div>
  );
}
