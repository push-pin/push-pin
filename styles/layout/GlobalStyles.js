import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-family: 'Roboto', sans-serif;
    /* defines what 1rem is -- 10px */
    /* font-weight: 300; */
    font-size: 62.5%; 
    overflow: scroll;
    overflow-x: hidden;
    
  }
  
  ::-webkit-scrollbar {
    /* Remove scrollbar space */
    width: 0px;  
    height: 0px;
    background: transparent; 
    /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
/* ::-webkit-scrollbar-thumb {
    background: #F8FCFF;
} */

  body {
    box-sizing: border-box;
    /* padding: 0;
    margin: 0; */
  }
`;


export { GlobalStyle };
