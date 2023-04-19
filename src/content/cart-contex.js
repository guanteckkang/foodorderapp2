import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { item } from "./item";
import { useNavigate } from "react-router-dom";
export const cartcontext = createContext();

export function CartContextProvider({ children }) {
  const [id, setId] = useState(true);
  const [menu, setMenu] = useState(item); //the main menu
  const [cart, setCart] = useState([]); //the cart list
  const navigate = useNavigate();
  // filter display result
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  //save local at beginning
  useEffect(() => {
    const LocalMenu = JSON.parse(localStorage.getItem("Menu"));
    const LocalCart = JSON.parse(localStorage.getItem("Cart"));
    if (LocalMenu === null) {
      localStorage.setItem("Menu", JSON.stringify(item));
      setMenu(item);
    } else {
      setMenu(LocalMenu);
    }
    if (LocalCart === null) {
      localStorage.setItem("Cart", JSON.stringify([]));
    } else {
      setCart(LocalCart);
    }
  }, []);
  //auto save menu
  useEffect(() => {
    localStorage.setItem("Menu", JSON.stringify(menu));
  }, [menu]);
  //auto save cart
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  const menu2 = menu?.filter((e) => {
    return e.display;
  });
  const menu3 = menu2?.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });

  // hide and show modal
  const [isValid, setIsValid] = useState(false);
  const showmodal = () => {
    setIsValid(true);
  };
  const hidemodal = () => {
    setIsValid(false);
  };

  // user add function
  function addItem({ info }) {
    const findItem = cart.findIndex((e) => {
      return e.sku === info.sku;
    });
    if (findItem === -1) {
      const selectedItem = {
        sku: info.sku,
        name: info.name,
        price: info.price,
        quantity: 1,
        sum: info.price,
      };
      setCart((prev) => [...prev, selectedItem]);
    } else {
      const updatedCart = cart.map((each) => {
        if (each.sku === info.sku) {
          return {
            ...each,
            quantity: each?.quantity + 1,
            sum: each?.sum + info.price,
          };
        } else return each;
      });
      setCart(updatedCart);
    }
  }
  // user remove function
  function removeItem({ info }) {
    const updatedCart = cart.map((each) => {
      if (each.sku === info.sku) {
        return {
          ...each,
          quantity: each?.quantity - 1,
          sum: each?.sum - info.price,
        };
      } else return each;
    });
    const findItem = updatedCart.findIndex((e) => {
      return e.sku === info.sku;
    });
    if (updatedCart[findItem].quantity === 0) {
      updatedCart.splice(findItem, 1);
    }
    setCart(updatedCart);
  }

  let value = {
    id,
    setId,
    menu3,
    search,
    setSearch,
    text,
    setText,
    item,
    menu,
    setMenu,
    isValid,
    setIsValid,
    showmodal,
    hidemodal,
    cart,
    setCart,
    addItem,
    removeItem,
    navigate,
  };
  return <cartcontext.Provider value={value}>{children}</cartcontext.Provider>;
}

export function CartUseContext() {
  return useContext(cartcontext);
}
