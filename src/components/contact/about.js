import { Helmet } from "react-helmet";

export function AboutUs() {
  const mainstyle = {
    margin: "30px",
    textAlign: "center",
    color: "red",
  };
  return (
    <div style={mainstyle}>
      <Helmet>
        {" "}
        <title>About Us</title>
      </Helmet>
      <h1>ABOUT US</h1>
      <h3>This website is created by GTK. </h3>
      <h3>For the purposes of completing learning institution programme. </h3>
      <h3>Please donate. Thank you. </h3>
    </div>
  );
}
