import React from "react";
import { DivMaster, Div } from "../payment/styled";
import HeaderOthersPage from "../../components/headerOthersPage";

export default function Hours() {
 

  return (
    <DivMaster>
      <HeaderOthersPage title= "Horários"/>
      <Div>
        <div>
          <a>DOM</a>
          <a>16:30 - 23:20</a>
        </div>
        <div>
          <a>SEG</a>
          <a>16:30 - 23:20</a>
        </div>
        <div>
          <a>TER</a>
          <a>16:30 - 23:20</a>
        </div>
        <div>
          <a>QUA</a>
          <a>16:30 - 23:20</a>
        </div>
        <div>
          <a>QUI</a>
          <a>16:30 - 23:20</a>
        </div>
        <div>
          <a>SEX</a>
          <a>16:30 - 23:20</a>
        </div>
        <div>
          <a>SAB</a>
          <a>16:30 - 23:20</a>
        </div>
      </Div>
    </DivMaster>
  );
}
