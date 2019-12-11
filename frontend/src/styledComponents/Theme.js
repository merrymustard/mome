import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  width: 100vw;
  height: 100vh;
  padding: 6% 10%;
  box-sizing: border-box;
	body{
		margin-top: 4%;
		@media (max-width: 768px) {
			margin-top: 460px;
    }
	}
`;



export default GlobalStyles;

