import React from "react";
import { StyledFooter, DivEsq, DivDir } from "./styled";
import receipt from "../../assets/imgs/receipt-icon.png";
import home from "../../assets/imgs/home.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  const handleOrders = () => {
    navigate("/orders");
  };

  const handleHome = () =>{
    navigate("/");
  }

  return (
    <StyledFooter>
      <DivEsq>
        <img src={home} alt="icon-home"  onClick={handleHome} />
        <p>Cardapio</p>
      </DivEsq>
      <DivDir>
        <img src={receipt} alt="icon-receipt"  onClick={handleOrders}  />
        <p>Pedidos</p>
      </DivDir>
    </StyledFooter>
  );
}
