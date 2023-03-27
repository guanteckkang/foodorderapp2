import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./content/cart-contex";
import { ItemContextProvider } from "./content/item-contex";
import { LandingPage } from "./components/LandingPage/Landing";
import Admin from "./components/admin/admin";
import { User } from "./components/user/User";
import { Contact } from "./components/contact/contact";
import { AboutUs } from "./components/contact/about";
import { NotFound } from "./components/404notfound/404";
import Header from "./components/header/header";
import { useState } from "react";

export default function App() {
  const [id, setId] = useState(null);
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ItemContextProvider>
          <Header id={id} setId={setId} />
          <Routes>
            <Route path="/" element={<LandingPage setId={setId} />} />
            <Route path="/user" element={<User id={id} />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={<NotFound setId={setId} />} />
          </Routes>
        </ItemContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}
