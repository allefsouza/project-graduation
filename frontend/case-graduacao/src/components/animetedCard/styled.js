import styled from "styled-components";
import { animated } from "react-spring";

export const CardWrapper = styled(animated.div)``;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Option = styled.button`
  background-color: ${(props) => (props.add ? "#4caf50" : "#f44336")};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Popup = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 128, 0, 0.8); 
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white; 
  text-align: center;
  opacity: 0.9; 
  backdrop-filter: blur(5px); 
  z-index: 999; 

`
export const PopupNegative = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.5);; /* Cor vermelha com transparência */
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white; /* Cor do texto */
  text-align: center;
  opacity: 0.9; /* Transparência */
  backdrop-filter: blur(5px); /* Efeito de desfoque no fundo */
  z-index: 999; /* Garanta que o popup esteja acima de outros elementos */
`