import styled from "styled-components";


export const SignUpTag = styled.form `
  background-image: url("/images/oval-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding: 6% 10%;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  p {
    font-size: 1.2rem;
    color:#97989a;
  }
  h1 {
      font-size: 3rem;
      color:#628165;
    }
  .duo-div {
    width: 36%;

  }
  .duo-div:last-of-type {
    padding-left: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
      width: 100%;
      height: 60px;
      font-size: 1.3rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
    }
    h3 {
      font-size: 2rem;
      font-weight: 300;
      margin: 5px 0;
    }
    h2 {
      font-size: 2.4rem;
      margin: 0;
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    tag {
      color: #949494;
    }
    input {
      padding: 14px;
      border: none;
      background: #ececec;
      margin: 5px 0;
      width: 110%;
    }
  }
`;


// add product form
export const AddProdTag = styled.form `
  width: 100vw;
  height: 100vh;
  padding: 6% 10%;
  display: flex;
  flex-direction: column;
	box-sizing: border-box;
	text-align: left;
	label{
		margin: 10px 0;
	}
	input{
		padding: 14px;
    border: none;
    background: #ececec;
    margin-bottom: 5px;
		border-radius: 10px;
	}
	textarea{
		padding: 14px;
		height: 300px;
    border: none;
    background: #ececec;
    margin-bottom: 5px;
		border-radius: 10px;
	}
	button[type="submit"]{
		font-size: 1.2rem;
		padding: 10px;
		background-color: salmon;
		color: white;
		border: none;
		border-radius: 10px;
		margin: 20px 0;
	}
	div>button{
			font-size: 1rem;
			font-weight: 800;
			padding: 14px;
			border: none;
			margin: 10px 0;
			background-color: black;
			color: white;
			border-radius: 10px;
	}
`;

export const InventoryInput = styled.div `
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		box-sizing: border-box;
		padding: 14px 0;
		.inventory-blocks{
			display: flex;
			flex-direction: column;
		}
`