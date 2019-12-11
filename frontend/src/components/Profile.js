import React from "react";
import { MyContext } from "../context";
import { ProfileTag }  from "../styledComponents/StyledComps"



export default function SignupContainer(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <ProfileTag>
                    <div div className="duo-div">
                        <h1>Profile</h1>
                        <div className="form-container">
                            <tag>Welcome</tag>
                            <h3>{context.state.user.username}</h3>
                        </div>
                        <div> 
                          <h4>Tus Datos</h4>  
                          {/* name edit */}
                          <div className="form-container">
                            <tag>Name</tag>
                            <input
                              type="text"
                              name="name"
                              onChange={e => context.handleInput(e, "formSignup")}
                              value={context.formSignup.name}
                            />
                          </div>
                          {/* email edit maybe not.. only if email reset is possible */}
                          <div className="form-container">
                            <tag>Email</tag>
                            <input
                              type="email"
                              name="email"
                              onChange={e => context.handleInput(e, "formSignup")}
                              value={context.formSignup.email}
                            />
                          </div>
                          username edit
                          <div className="form-container">
                            <tag>Username</tag>
                            <input
                              type="text"
                              name="username"
                              onChange={e => context.handleInput(e, "formSignup")}
                              value={context.formSignup.username}
                            />
                          </div>

                           
                        </div>
                    </div>
                    <div div className="duo-div">
                        <div>
                          Order summary
                        </div>
                    </div>
                </ProfileTag>
            )}
        </MyContext.Consumer>
    );
}
