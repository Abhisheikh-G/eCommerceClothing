import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Open Sans Condensed";
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-appear {
    opacity: 0;
    z-index: 1;
  }

  .fade-appear-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }
  
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }
  
  .fade-exit {
    opacity: 0;
    display: none;
  }
  
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-out;
  }
  
  
`;
