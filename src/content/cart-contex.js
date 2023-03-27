import { useContext, useState } from "react";
import { createContext } from "react";
import { item } from "./item";
export const cartcontext = createContext();

export function CartContextProvider({ children }) {
  const [menu, setMenu] = useState(item); //the main menu
  const [cart, setCart] = useState([]); //the cart list

  // filter display result
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

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
    const updatedMenu = menu.map((each) => {
      if (each.sku === info.sku) {
        return {
          ...each,
          quantity: each?.quantity - 1,
        };
      } else return each;
    });
    setMenu(updatedMenu);
  }
  // user remove function
  function removeItem({ info }) {
    const updatedMenu = menu.map((each) => {
      if (each.sku === info.sku) {
        return {
          ...each,
          quantity: each.quantity + 1,
        };
      } else return each;
    });
    setMenu(updatedMenu);
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
  };
  return <cartcontext.Provider value={value}>{children}</cartcontext.Provider>;
}

export function CartUseContext() {
  return useContext(cartcontext);
}
