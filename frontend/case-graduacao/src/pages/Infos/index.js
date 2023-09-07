import React from "react";
import location from "../../assets/imgs/location.png";
import whats from "../../assets/imgs/whats.png";
import phoneIcon from "../../assets/imgs/phoneIcon.png";
import { Div, DivMaster } from "../payment/styled";
import HeaderOthersPage from "../../components/headerOthersPage";

export default function Infos() {
 

  return (
    <DivMaster>
      <HeaderOthersPage title='Informações'/>
      <Div>
        <div>
          <img src={location} width='30px' />
          <a href="https://www.google.com/maps/place/Rua+Quirino+Zagonel+-+São+José+dos+Pinhais,+PR,+83020-250/@-25.5590111,-49.1989602,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcf75d6db61ff3:0x54f6563b5cb8b2bd!8m2!3d-25.559016!4d-49.1963799!16s%2Fg%2F1ymt45vrx?entry=ttu">
            Rua Ficticia de Abreu,502 - Jd Nada Ve - São josé dos pinhais
          </a>
        </div>
        <div>
          <img src={whats} />
          <a href="tel:4135566556">(41) 99556 6556</a>
        </div>
        <div>
          <img src={phoneIcon} />
          <a href="tel:4135566556">(41) 3556 6556</a>
        </div>
      </Div>
    </DivMaster>
  );
}
