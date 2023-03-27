import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Helmet } from "react-helmet";
export function Contact() {
  const mainstyle = {
    margin: "30px",
    textAlign: "center",
    color: "red",
  };
  const iconstyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "red",
  };
  function link(url) {
    window.open(url, "_blank");
  }
  return (
    <div style={mainstyle}>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1>CONTACT US AT</h1>
      <ArrowCircleDownIcon style={{ fontSize: "130px" }} />
      <h3>Email: support@wcdonalds.com.my</h3>
      <h3>Phone: +60 1234 56789</h3>
      <button style={iconstyle}>
        <FacebookIcon
          onClick={() => {
            link("https://www.facebook.com");
          }}
        />
      </button>
      <button style={iconstyle}>
        <InstagramIcon
          onClick={() => {
            link("https://www.instagram.com");
          }}
        />
      </button>
      <button style={iconstyle}>
        <LinkedInIcon
          onClick={() => {
            link("https://www.linkedin.com");
          }}
        />
      </button>
      <button style={iconstyle}>
        <RedditIcon
          onClick={() => {
            link("https://www.reddit.com");
          }}
        />
      </button>
      <button style={iconstyle}>
        <YouTubeIcon
          onClick={() => {
            link("https://www.youtube.com");
          }}
        />
      </button>
    </div>
  );
}
