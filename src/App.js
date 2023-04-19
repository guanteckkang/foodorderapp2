import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./content/cart-contex";
import { ItemContextProvider } from "./content/item-contex";
import Admin from "./components/admin/admin";
import { User } from "./components/user/User";
import { Contact } from "./components/contact/contact";
import { AboutUs } from "./components/contact/about";
import { NotFound } from "./components/404notfound/404";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ItemContextProvider>
          <Header />
          <Footer />
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ItemContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}
