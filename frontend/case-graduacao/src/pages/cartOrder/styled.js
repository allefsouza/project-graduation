import styled from "styled-components";

export const CartItens = styled.div``;
export const CartResume = styled.div`
  margin: 10px;
`;
export const ButtonConfirm = styled.button `
  margin-left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid #4CAF50;
  border-radius: 0.6em;
  color: #4CAF50;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 0.5em 1.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  &:hover, &:focus {
    color: #fff;
    outline: 0;
  }

  &.first {
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  }

  &.first:hover {
    box-shadow: 0 0 40px 40px #4CAF50 inset;
  }
`

export const Cart = styled.section`
  box-shadow: 0 0 3px ;
  height: 80vh;
  flex-grow: 1;
  overflow: auto;
    img{
        width: 30px;
        margin: 10px;
        
        
    }
    h1{
        font-weight: bold;
    }
 `
