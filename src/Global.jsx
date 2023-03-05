import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "apple";
    letter-spacing: -1px;
  }

body{
    background: #fff;
    overflow-x: hidden;
  }

body::-webkit-scrollbar {
  display: none;
}

ul, li{
  list-style: none;
}

img{
    vertical-align: middle;
}

@font-face {
  font-family: "apple";
  src: url("./assets/font/Apple\ SD\ Gothic\ Neo\ Bold.ttf") format("font-ttf");
}
`;

export default GlobalStyle;
