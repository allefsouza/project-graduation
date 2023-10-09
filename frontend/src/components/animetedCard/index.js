import React, { useContext, useState } from "react";
import { update, useSpring } from "react-spring";
import { CardWrapper, OptionsWrapper, Option, Popup, PopupNegative } from "./styled";
import AppContext from "../../context/AppContext";

const AnimatedCard = ({ children, item, handleCardAction }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showDuplicateFlavorPopup, setShowDuplicateFlavorPopup] = useState(false)
  const {cartItems, setCartItems} = useContext(AppContext)
  const cardAnimation = useSpring({
    transform: showOptions ? "translateY(-40px)" : "translateY(0)",
    config: { tension: 180, friction: 12 },
  });
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const handleAddToCart = () => {
    const flavorAlreadyyAdded = cartItems.some((cartItem)=> cartItem.id === item.id)
    if(!flavorAlreadyyAdded){
      const updateCart = [...cartItems, item]
      // setCartItems([...cartItems, item])
      setCartItems(updateCart)
      saveCartToLocalStorage(updateCart)
      handleCardAction(item);
      setShowMessage(true);
      setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    }else{
      setShowDuplicateFlavorPopup(true)
      setTimeout(()=>{
        setShowDuplicateFlavorPopup(false)
      },2000)
    }
    
  };

  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <CardWrapper style={cardAnimation} onClick={handleClick}>
      {children}
      {showOptions && (
        <OptionsWrapper>
          <Option as="button" onClick={handleAddToCart}>
            Adicionar
          </Option>
        </OptionsWrapper>
      )}
      {showMessage && (
        <Popup>
          <p>Sabor Adicionado!</p>
        </Popup>
      )}
      {showDuplicateFlavorPopup && (
        <PopupNegative>
            <p>Sabor já foi adicionado ao carrinho!</p>
        </PopupNegative>
      )}
    </CardWrapper>
  );
};

export default AnimatedCard;
