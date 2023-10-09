import React from "react";
import { DivPayments, DivMaster, DivMoney, Div } from "./styled";
import credit from "../../assets/imgs/credit_card.png";
import money from "../../assets/imgs/money.png";
import HeaderOthersPage from "../../components/headerOthersPage";

export default function Payment() {
  return (
    <DivMaster>
      <HeaderOthersPage title="Pagamentos" />
      <DivMoney>
        <div>
          <img src={money} />
          <h1>Dinheiro</h1>
        </div>
      </DivMoney>
      <DivPayments>
        <div>
          <img src={credit} />
          <h1>Cartões</h1>
        </div>
      </DivPayments>
      <Div>
        <div>
          <img src={credit} />
          <a>REFEIÇÃO</a>
        </div>
        <div>
          <img src={credit} />
          <a>VISA</a>
        </div>
        <div>
          <img src={credit} />
          <a>MASTER</a>
        </div>
        <div>
          <img src={credit} />
          <a>CIELO</a>
        </div>
        <div>
          <img src={credit} />
          <a>ALIMENTAÇÃO</a>
        </div>
        <div>
          <img src={credit} />
          <a>SINDICADO METALURGICO</a>
        </div>
        <div>
          <img src={credit} />
          <a>SENFF</a>
        </div>
      </Div>
    </DivMaster>
  );
}
