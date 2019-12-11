import styled from "styled-components";

//sign up form
export const SignUpTag = styled.form`
  ${"" /* background-image: url("/images/oval-bg.png");
  background-repeat: no-repeat;
  background-size: cover; */}
  width: 100vw;
  height: 100vh;
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
    color: #628165;
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

export const MainBtn = styled.input`
  padding: 10px;
	background-color: red;

`;

// forms main skeleton
export const MainWrapperield = styled.div`
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }

    .row-container-radio {
      display: flex;
      flex-direction: row;

      ${"" /* radio button styles */}
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
        background: #f87da9;
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
      ${"" /* end radio buttons style */}
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
        border: black solid 1px;
        margin: 10px;
        font-size: 1rem;
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
