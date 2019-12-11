import styled from "styled-components";

/////color palette
export const colors = {
  primary: " #0f0d35",
  // primary: " #201e45",
  secondary: "#404267",
  secondaryLight: "#e4e4ef",
  accent: "#f07b7b",
  darkBlack: "#131415",
  midGray: "#888888",
  lighGray: "#F5F5F5"
};

////////// sign up form
export const SignUpTag = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6% 10%;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.2rem;
    color: #97989a;
  }
  h1 {
    font-size: 3rem;
    font-weight: 200;
    color: ${colors.darkBlack};
  }
  h4 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    color: ${colors.midGray};
  }
`;

// add product form
export const AddProdTag = styled.form`
  width: 100vw;
  height: 100vh;
  padding: 6% 10%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;
  label {
    margin: 10px 0;
  }
  input {
    padding: 14px;
    border: none;
    background: #ececec;
    margin-bottom: 5px;
    border-radius: 10px;
  }
  textarea {
    padding: 14px;
    height: 300px;
    border: none;
    background: #ececec;
    margin-bottom: 5px;
    border-radius: 10px;
  }
  button[type="submit"] {
    font-size: 1.2rem;
    padding: 10px;
    background-color: salmon;
    color: white;
    border: none;
    border-radius: 10px;
    margin: 20px 0;
  }
  div > button {
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

////////// Buttons
export const MainBtn = styled.input`
  padding: 18px 30px;
  background-color: ${colors.accent};
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: white;
  border-radius: 4px;
`;

///////////Radiobuttons
export const RowContainerRadio = styled.div`
  display: flex;
  flex-direction: row;
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: ${colors.accent};
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const CenterizeMe = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
`;

////////// forms main skeleton
export const MainWrapperield = styled.div`
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
		hr{
		border: ${colors.secondaryLight} solid 0.5px;
		}
	small{
		float: right;
		font-size: .8rem;
		color: ${colors.midGray};
		margin-bottom: 20px;
	}
		.tenpix{
			margin-left: 10px;
		}

    .row-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media (max-width: 768px) {
        flex-direction: column;
      }

      .form-container {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        width: 100%;
				 label{
					 color: ${colors.midGray}
				 }
        .radio-btn-h {
          display: flex;
          flex-direction: row;
          align-items: center;
          input {
            width: 80px;
            font-size: 3rem;
          }
        }
        label {
          margin-left: 10px;
        }
      }
      input {
        padding: 16px;
        border: ${colors.secondaryLight} solid 1px;
        margin: 10px;
        font-size: 1rem;
				border-radius: 4px;
      }
    }
  }
`;

export const InventoryInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  padding: 14px 0;
  .inventory-blocks {
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileTag = styled.form`
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
    color: #97989a;
  }
  h1 {
    font-size: 3rem;
    color: #628165;
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

////////// main nav
export const NavMain = styled.nav`
.logo{
	color: white;
}
	width: 100vw;
	height: 60px;
	background-color: ${colors.darkBlack};
	top: 0;
	position: fixed;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 4%;
	.main-nav-icons{
		width: 10%;
		display: flex;
		align-content: center;
		justify-content: space-between;
		@media (max-width: 768px) {
				width:24%;
			}
    }
	}
`;
