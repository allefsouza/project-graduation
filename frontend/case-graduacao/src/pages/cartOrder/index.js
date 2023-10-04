import React, { useContext} from "react";
import { Cart, CartItens, CartResume, ButtonConfirm } from "./styled";
import CardCart from "../../components/cardCart";
import HeaderOthersPage from "../../components/headerOthersPage";
import Footer from '../../components/footer/footer'
import AppContext from "../../context/AppContext";
import OrderFormModal from '../../components/OrderForm/index'


export default function CartOrder() {
  const {cartItems, isModalVisible, setIsModalVisible, setCartItems} = useContext(AppContext)
  const totalPrice = cartItems.reduce((acc, item )=>item.preco + acc, 0);
  
  

  const handleConfirmOrder = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = (formData) => {
     // Acesso ao carrinho no formData
    setCartItems([]); // Limpar o carrinho após a submissão
    setIsModalVisible(false); // Fechar o modal após a submissão
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
