import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  width: 100vw;
  height: 100vh;
  padding: 200px 8%;
  box-sizing: border-box;
	}
	body{
		padding-top: 80px;
		background-color:" #FAF8F5";
		@media (max-width: 768px) {
			margin-top: 100px;
      }
	}
`

export default GlobalStyles
