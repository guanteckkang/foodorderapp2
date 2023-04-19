import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const itemcontext = createContext();

export function ItemContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(0);
  const [data, setData] = useState();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const LocalHistory = JSON.parse(localStorage.getItem("History"));
    if (LocalHistory === null) {
      localStorage.setItem("History", JSON.stringify([]));
    } else {
      setHistory(LocalHistory);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("History", JSON.stringify(history));
  }, [history]);
  const handleOpen = (num, info) => {
    setOpen(true);
    setModal(num);
    setData(info);
  };
  const handleClose = () => setOpen(false);

  let value = {
    open,
    setOpen,
    handleOpen,
    handleClose,
    modal,
    data,
    history,
    setHistory,
  };
  return <itemcontext.Provider value={value}>{children}</itemcontext.Provider>;
}
export function ItemUseContext() {
  return useContext(itemcontext);
}
