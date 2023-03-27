import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { CartUseContext } from "../../content/cart-contex";
import CardList from "./CardList";
import BasicModal from "./Modal";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
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
    margin: "10px 30px",
    color: "red",
  };
  useEffect(() => {
    setSearch(text);
  }, [text]);
  return (
    <>
      <Helmet>
        <title>User</title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          margin: "10px auto",
          width: "30%",
        }}
      >
        <TextField
          id="input-with-sx"
          label="search..."
          variant="standard"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <ClearIcon
          sx={{ color: "red", mr: 1, my: 0.5, cursor: "pointer" }}
          onClick={() => {
            setText("");
            setSearch("");
          }}
        />
      </Box>
      {search.length === 0 ? (
        <></>
      ) : (
        <h2 style={displaylist}>Search result: {menuList.length}</h2>
      )}
      {menuList.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No item available</h1>
      ) : (
        <div style={displaylist}>{menuList}</div>
      )}
      <BasicModal
        showmodal={showmodal}
        hidemodal={hidemodal}
        isValid={isValid}
      />
    </>
  );
}
