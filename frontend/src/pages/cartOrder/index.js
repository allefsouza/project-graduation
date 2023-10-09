import React, { useContext, useEffect} from "react";
import { Cart, CartItens, CartResume, ButtonConfirm } from "./styled";
import CardCart from "../../components/cardCart";
import HeaderOthersPage from "../../components/headerOthersPage";
import Footer from '../../components/footer/footer'
import AppContext from "../../context/AppContext";
import OrderFormModal from '../../components/OrderForm/index'


export default function CartOrder() {
  const {cartItems, isModalVisible, setIsModalVisible, setCartItems} = useContext(AppContext)
  const totalPrice = cartItems.reduce((acc, item )=>item.preco + acc, 0);
  
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      try {
        setCartItems(JSON.parse(storedCartItems));
      } catch (error) {
        console.error("Erro ao analisar JSON do carrinho:", error);
      }
    }
  }, []);
  

  const handleConfirmOrder = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = (formData) => {
     // Acesso ao carrinho no formData
     const updateCart = formData.Cart || []
    localStorage.setItem("cartItems", JSON.stringify(updateCart));
    setCartItems([]);  
    setIsModalVisible(false); 
   
  };

  return (
    <div>
      <HeaderOthersPage title='Carrinho'/>
      <Cart>
        <CartItens>
          {cartItems.map((item)=> 
          <CardCart 
          price={item.preco} 
          id={item.id} 
          key={item.id} 
          name={item.nome} 
          preco={item.preco}
          />
          )}
        </CartItens>
        <CartResume>Valor do pedido:R${totalPrice}</CartResume>
        {cartItems.length > 0 && <ButtonConfirm className="first" onClick={handleConfirmOrder}>Confirmar Pedido</ButtonConfirm>}
        </Cart>
      <Footer/>
      <OrderFormModal
        visible={isModalVisible}
        onClose={handleModalClose}
        cart={cartItems} // Passando o carrinho como propriedade ao modal
        onFormSubmit={handleFormSubmit} // Passando a função de submissão do formulário
      />
    </div>
  );
}
