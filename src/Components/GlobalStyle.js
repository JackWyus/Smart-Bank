//Essa importação vai permitir que criemos um arquivo global de Reset utilizando o styled-components
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
`;