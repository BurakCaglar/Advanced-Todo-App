import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/*********  GLOBAL STYLES ********/
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #140152;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.1rem; 
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

/***********  GLOBAL CLASSNAMES ************/

${
  "" /* .container {
  padding: 1rem 0;
}
.container-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1920px;
} */
}

@media screen and (min-width: 992px) {
  .container-center {
    width: 95vw;
  }
}


`;

export default GlobalStyles;
