import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { ItemUseContext } from "../../content/item-contex";
import { CartUseContext } from "../../content/cart-contex";
import DisplayModal from "./ModalDisplay";
import { AddMenu } from "./addMenu";
import History from "./History";
import Chart from "./chart";
import ItemCard from "./card";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { menu } = CartUseContext();

  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearch(text);
  }, [text]);

  const filtered = menu.filter((e) => {
    return (
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.sku.toLowerCase().includes(search.toLowerCase())
    );
  });

  const menuList = filtered.map((e, index) => {
    return <ItemCard key={index} info={e} />;
  });
  return (
    <Box sx={{ width: "80%", margin: "auto 10%", marginBottom: "60px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="All item" {...a11yProps(0)} style={{ color: "red" }} />
          <Tab label="Add item" {...a11yProps(1)} style={{ color: "red" }} />
          <Tab label="History" {...a11yProps(2)} style={{ color: "red" }} />
          {/* <Tab label="Sales" {...a11yProps(3)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
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
        <div id="menulist">{menuList}</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddMenu />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <History />
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        <Chart />
      </TabPanel> */}
      <DisplayModal />
    </Box>
  );
}
