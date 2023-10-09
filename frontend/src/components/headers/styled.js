import styled, {css, keyframes} from "styled-components";
import pizza from "../../assets/imgs/pizza.png";

export const ContainerMain = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const ContainerHeader = styled.header`
  height: 150px;
  background-color: #d9a602;
  background-image: url(${pizza});
  background-size: cover;
  background-position: right;
  border-radius: 0 0 5px 5px;
  position: relative;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
`;

export const Start = styled.div`
  padding-top: 100px;
  left: 10px;
  width: 30px;
  cursor: pointer;
  position: absolute;
  flex-direction: row;
  display: flex;
  align-items: center;
  color: white;
  label {
    cursor: pointer;
  }
  img {
    width: 30px;
  }
`;

export const IMG = styled.img`
  margin-top: 100px;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const DivImg = styled.div`
  text-align: center;
  position: relative;
`;
export const SecondDiv = styled.div`
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.4);
  border-radius: 0 0 5px 5px;
  padding-bottom: 0.25rem !important;
  box-sizing: border-box;
  padding-top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const DivHorario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const DivMetodos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 20px;
    }
  }
`;
export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 3px solid red;
  border-radius: 0;
  margin-bottom: 10px;
`;
