import React from "react";
import {
  StyledContainer,
  StyledContent,
  StyledImage,
  StyledText,
  CartProps,
} from "./styled";
import { useNavigate } from "react-router-dom";
import backbuttom from "../../assets/imgs/white-back-icon.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function HeaderOthersPage({ title }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleCartOrder = () =>{
    navigate('/cartOrder')
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledImage src={backbuttom} onClick={handleGoBack} />
        <StyledText>{title}</StyledText>
      </StyledContent>
      <CartProps>
        <button onClick={handleCartOrder}>
          <span>32</span>
          <AiOutlineShoppingCart />
        </button>
      </CartProps>
    </StyledContainer>
  );
}
