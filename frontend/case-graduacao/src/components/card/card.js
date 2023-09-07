import React from "react";
import { CardPizza } from "./styled";

export default function Card({ name, price, onClick, ingredients }) {
  const handleClick = () =>{
    onClick();
  }
  
  return (
    <CardPizza onClick={onClick}>
      {name}
      <p>{price}</p>
      <p>{ingredients}</p>
    </CardPizza>
  );
}
