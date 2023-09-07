import styled from "styled-components";

export const CardPizza = styled.div`
  box-shadow: 0 3px 3px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  margin: 10px;
  padding: 40px;
  border-left: 10px solid red;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  p{
    color: #b7b4b4;
  }
`;
