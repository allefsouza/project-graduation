import styled from "styled-components";

export const BoxOrders = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px;
  height: 80vh;
  flex-grow: 1;
  overflow: auto;
  img {
    width: 30px;
    margin: 10px;
  }
  h1 {
    font-weight: bold;
  }
`;
export const DivSup = styled.div `
  display: flex;
  flex-direction: column;
  
`

export const DivFlavors = styled.div `
  display: flex;
  flex-direction: column;
  
`
export const DivName = styled.div `
display: flex;
flex-direction: column;

`
export const DivOrder = styled.div `
  display: flex;
  align-items: center;
`

export const Ul = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 3px 3px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  margin: 10px;
  padding: 50px;
  cursor: pointer;
  ul {
    margin: 5px;
    list-style: none;
    padding: 1px;
  }
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  p {
    color: red;
    padding: 2px;
  }
`;

export const P = styled.p`
  color: red;
  padding: 2px;
`;
