import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
    outline:none;
  }


  button{
  border:none;
  background:none;
  cursor: pointer;
  }

  html {
    font-size: 10px;
  }

  body {
    width:100%;
    height:100vh;
    font-size: 1.6rem;
    font-family: "Rubik", sans-serif;
    position:relative;
    margin:0;
    padding:0;
    outline:none;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
    *:focus {
    outline: transparent;
   }
`;

export default GlobalStyle;
