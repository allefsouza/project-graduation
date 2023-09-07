import React, { useContext } from "react";
import { Cart, CartItens, CartResume } from "./styled";
import CardCart from "../../components/cardCart";
import HeaderOthersPage from "../../components/headerOthersPage";
import Footer from '../../components/footer/footer'
import AppContext from "../../context/AppContext";

export default function CartOrder() {
  const {cartItems} = useContext(AppContext)

  return (
    <div>
      <HeaderOthersPage title='Carrinho'/>
      <Cart>
        <CartItens>
          {cartItems.map((item)=> <CardCart key={item.id} name={item.nome}/>)}
        </CartItens>
        <CartResume>Resume de carrinho.</CartResume>
      </Cart>
      <Footer/>
    </div>
  );
}
