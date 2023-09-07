import React, { useState } from "react";
import { useSpring } from "react-spring";
import { CardWrapper, OptionsWrapper, Option, Popup } from "./styled";

const AnimatedCard = ({ children, item, handleCardAction }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const cardAnimation = useSpring({
    transform: showOptions ? "translateY(-40px)" : "translateY(0)",
    config: { tension: 180, friction: 12 },
  });

  const handleAddToCart = () => {
    handleCardAction(item);
    console.log(item);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
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
    </CardWrapper>
  );
};

export default AnimatedCard;
