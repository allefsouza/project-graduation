import React, { useContext } from "react";
import {
  ContainerHeader,
  Start,
  IMG,
  SecondDiv,
  DivHorario,
  DivMetodos,
  DivName,
} from "./styled";
import ppl from "../../assets/imgs/ppl.png";
import logo from "../../assets/imgs/logoCenter.png";
import credit from "../../assets/imgs/credit_card.png";
import clock from "../../assets/imgs/clock.png";
import plus from "../../assets/imgs/plus_circle.png";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../search/search";
import Card from "../card/card";
import AppContext from "../../context/AppContext";

export default function Header() {
  const { cartItems, setCartItems, setSelectedPizzaSize } =
    useContext(AppContext);
  const navigate = useNavigate();
  const goPayment = () => {
    navigate("/payment");
  };
  const goHours = () => {
    navigate("/hours");
  };
  const goInfos = () => {
    navigate("/Infos");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleCardClick = (item) => {
    const selectedSize = {
      size:item.size,
      price:item.price
    }
    setCartItems([...cartItems, selectedSize])
    setSelectedPizzaSize(item)
    console.log(item);
    navigate("/pizzas");
  };

  return (
    <div>
      <ContainerHeader>
        <Start onClick={handleLogin}>
          <img src={ppl} />
          <label>Entrar</label>
        </Start>
        <IMG src={logo} />
      </ContainerHeader>
      <SecondDiv>
        <DivName>
          <h1>PIZZAS E MASSAS</h1>
          <p>Rua Ficticia de Abreu,502 - Jd Nada Ve - São josé dos pinhais</p>
        </DivName>
        <DivHorario>
          <div>
            <p>Entrega</p>
            <p>45min - 1h 0min</p>
          </div>
          <div>
            <p>Retirada</p>
            <p>30min</p>
          </div>
        </DivHorario>
        <DivMetodos>
          <div>
            <p>Pagamentos</p>
            <img src={credit} onClick={goPayment} />
          </div>
          <div>
            <p>Horários</p>
            <img src={clock} onClick={goHours} />
          </div>
          <div>
            <p>Informações</p>
            <img src={plus} onClick={goInfos} />
          </div>
        </DivMetodos>
      </SecondDiv>

      <SearchComponent
        url="http://localhost:3003/allprices"
        searchKey="name"
        itemKey="id"
        itemDisplayKey="name"
        placeholder="Digite sua pesquisa"
        title="PREÇOS"
        renderItem={(item) => (
          <Card name={item.size} price={item.price} onClick={handleCardClick} />
        )}
      />
    </div>
  );
}
