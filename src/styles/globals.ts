import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #299C95;
    --secondary-color: #67CF65;
    --input-color: #EBE5E5;
    --input-border-color: #988787;
    --talk-logo-colour: #67CF65;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Poppins', sans-serif;
  }

  html, body, main {
    background-color: black;
    height: 100vh;
  }
`;

export default GlobalStyle;