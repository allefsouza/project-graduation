import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Payment from "../pages/payment";
import Hours from "../pages/hours";
import Infos from "../pages/Infos";
import Pizzas from "./../pages/pizzas/Index";
import Orders from "../pages/orders";
import CartOrder from "../pages/cartOrder";
import Login from "../pages/login";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/hours" element={<Hours />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/*" element={<CartOrder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
