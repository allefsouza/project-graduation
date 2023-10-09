import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  background-color: red;

  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;

  img {
    width: 25px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const DivEsq = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  p {
    color: white;
    cursor: pointer;
  }
`;

export const DivDir = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: white;
    cursor: pointer;
  }
`;
