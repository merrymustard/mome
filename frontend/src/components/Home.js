import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeTag = styled.div`
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
  .duo-div p {
    font-size:1.7rem;
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
  button{
    width:80%;
    padding: 10px 30px;
    margin:10px auto;
    text-alignment:center;
    background-color:#c0e3be;
    font-size:1rem;
    font-weight:bolder;

  }
  .btn-container{
    width:100%;
    margin:100px 30px;
  }
  .form-container {
    display: flex;
    flex-direction: column;
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
export default class Home extends Component {
  render() {
    return (
      <HomeTag>
        <div className="duo-div">
          <div>
            <h1>IronProfile</h1>
            <p>Today we will create an app with authorization, adding some cool styles </p>
          </div>
          <div className="btn-container">
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </div>
        </div>
        <div className="duo-div">

        </div>


      </HomeTag>
    );
  }
}
