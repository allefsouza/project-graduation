import React, { useContext } from "react";
import { Cart, CartItens, CartResume } from "./styled";
import CardCart from "../../components/cardCart";
import HeaderOthersPage from "../../components/headerOthersPage";
import Footer from '../../components/footer/footer'
import AppContext from "../../context/AppContext";

export default function CartOrder() {
  const {cartItems} = useContext(AppContext)
  const totalPrice = cartItems.reduce((acc, item )=>item.preco + acc, 0);

  return (
    <div>
      <HeaderOthersPage title='Carrinho'/>
      <Cart>
        <CartItens>
          {cartItems.map((item)=> <CardCart price={item.preco} id={item.id} key={item.id} name={item.nome} preco={item.preco}/>)}
        </CartItens>
        <CartResume>Valor do pedido:R${totalPrice}</CartResume>
      </Cart>
      <Footer/>
    </div>
  );
}
