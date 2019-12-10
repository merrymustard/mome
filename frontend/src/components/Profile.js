import React from "react";
import styled from "styled-components";
import { MyContext } from "../context";
import { Link } from "react-router-dom";

const ProfileTag = styled.form`
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
                <ProfileTag
                    onSubmit={e => {
                        context.handleUpload(e);
                        // props.history.push("/login");
                    }}
                >
                    <div div className="duo-div">
                        <h1>Profile</h1>
                        <div className="form-container">
                            <tag>Username</tag>
                            <h3>{context.state.user.username}</h3>
                        </div>
                        <div className="form-container">
                            <tag>Campus</tag>
                            <h3>{context.state.user.campus}</h3>
                        </div>
                        <div className="form-container">
                            <tag>Course</tag>
                            <h3>{context.state.user.course}</h3>
                        </div>
                        <div>    
                            <button onClick={e => {
                                e.preventDefault()
                                context.handleLogout(() => {
                                  props.history.push("/login");
                                });
                            }}>Logout</button>
                        </div>
                    </div>
                    <div div className="duo-div">
                        <div>
                            {/* <img src={{}}></img> */}
                            <button type="submit">Edit Photo</button>
                        </div>
                        <div>
                            <p>
                                The user is able to upload a new profile photo, using
                                NodeJS and Multer upploader
                            </p>
                        </div>
                    </div>
                </ProfileTag>
            )}
        </MyContext.Consumer>
    );
}
