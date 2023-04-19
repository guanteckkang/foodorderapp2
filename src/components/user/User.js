import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { CartUseContext } from "../../content/cart-contex";
import CardList from "./CardList";
import BasicModal from "./Modal";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LandingPage } from "../LandingPage/Landing";


export function User() {
  const {
    menu3,
    isValid,
    showmodal,
    hidemodal,
    text,
    setText,
    search,
    setSearch,
  } = CartUseContext();

  const menuList = menu3?.map((e, index) => {
    return <CardList key={index} info={e} index={index} />;
  });
  const displaylist = {
    margin: "10px auto",
    width: "50%",
    color: "red",
  };
  const red = {
    color: "red",
  };
  useEffect(() => {
    setSearch(text);
  }, [text]);

  return (
    <div>
      <Helmet>
        <title>User</title>
      </Helmet>
      <LandingPage />
      <div style={displaylist}>
        <Box sx={{ margin: "10px auto", width: "50%" }}>
          <h2>Search for the Food you like</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            margin: "10px auto",
            width: "40%",
          }}
        >
          <SearchIcon sx={{ mr: 1, my: 0.5, color: "red" }} />
          <TextField
            id="input-with-sx"
            label="search..."
            variant="standard"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={red}
          />
          <ClearIcon
            sx={{ mr: 1, my: 0.5, color: "red" }}
            onClick={() => {
              setText("");
              setSearch("");
            }}
          />
        </Box>
        {search.length === 0 ? (
          <></>
        ) : (
          <h2>Search result: {menuList.length}</h2>
        )}
        {menuList.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>No item available</h1>
        ) : (
          <div>{menuList}</div>
        )}
        <BasicModal
          showmodal={showmodal}
          hidemodal={hidemodal}
          isValid={isValid}
        />
      </div>
    </div>
  );
}
