import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border-radius:5px 5px 5px 5px ;
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Poppins', sans-serif;
  }
`;
