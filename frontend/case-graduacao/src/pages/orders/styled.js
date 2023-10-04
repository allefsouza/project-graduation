import styled from "styled-components";

export const BoxOrders = styled.div`
  display: flex;
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

export const Ul = styled.div`
  width: 200px;
  box-shadow: 0 3px 3px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  margin: 10px;
  padding: 40px;
  cursor: pointer;
  ul {
    list-style: none;
    padding: 0;
  }
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  p {
    color: red;
  }
`;

export const P = styled.p`
  color: red;
`;
