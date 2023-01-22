import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "apple";
    letter-spacing: -3px;
  }

body{
    background: #000;
    overflow-x: hidden;
  }

body::-webkit-scrollbar {
  width: 10px;
  background: #000;

}

body::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #0c0c13;
  /* background: #ffffff; */
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
