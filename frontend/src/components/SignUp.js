import React from "react";
import styled from "styled-components";
import { MyContext } from "../context";

const SignUpTag = styled.form`
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
export default function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <SignUpTag
          onSubmit={e => {
            e.preventDefault()
            context.handleSignup(e);
            props.history.push("/profile");
          }}
        >
          <div div className="duo-div">
            <h1>Sign Up</h1>
            <div className="form-container">
              <tag>Username</tag>
              <input
                type="text"
                name="username"
                onChange={e => context.handleInput(e, "formSignup")}
                value={context.formSignup.username}
              />
            </div>
            <div className="form-container">
              <tag>Password</tag>
              <input
                type="password"
                name="password"
                onChange={e => context.handleInput(e, "formSignup")}
                value={context.formSignup.password}
              />
            </div>
            <div className="form-container">
              <tag>Campus</tag>
              <input
                type="text"
                name="campus"
                onChange={e => context.handleInput(e, "formSignup")}
                value={context.formSignup.campus}
              />
            </div>
            <div className="form-container">
              <tag>Course</tag>
              <input
                type="text"
                name="course"
                onChange={e => context.handleInput(e, "formSignup")}
                value={context.formSignup.course}
              />
            </div>
          </div>
          <div div className="duo-div">
            <div>
              <h2>Hello!</h2>
              <h3>Wellcome to IronProfile!</h3>
            </div>
            <div>
              <p>
                If you sign up you agree with all our terms and conditions where
                we can do whatever we want with the data!
              </p>
            </div>

            <button type="submit">Create the Account</button>
          </div>
        </SignUpTag>
      )}
    </MyContext.Consumer>
  );
}
