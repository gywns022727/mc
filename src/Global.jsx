import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #eeeeee;
  }
  img{
    vertical-align: middle;
  }
`;

export default GlobalStyle;
