import React from "react";
import { MyContext } from "../context";
import { SignUpTag } from "../styledComponents/StyledComps";

export default function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <SignUpTag
          onSubmit={e => {
            e.preventDefault();
            context.handleSignup(e);
            props.history.push("/profile");
          }}
        >
          <div div className="duo-div">
            <h1>Información Personal</h1>

            {/* row1 */}
            <div className="row-container">
              <div className="form-container">
                <label for="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.name}
                />
              </div>
              <div className="form-container">
                <label for="lastname">Apellido</label>
                <input
                  type="text"
                  name="lastname"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value="Apellido"
                />
              </div>
            </div>
            {/* row2 */}
          
            <div className="row-container">
              <div className="form-container">
              <label for="category">Genero</label>
              
                <div
                  className="radio-btn-h"
                  onChange={e => context.handleInput(e, "newProduct")}
                >
                
                  <input
                    type="radio"
                    name="category"
                    value="Hombre"
                    onChange={e => context.handleInput(e, "newProduct")}
                  />
                  Hombre
                  <br />
                  <input
                    type="radio"
                    name="category"
                    value="Mujer"
                    // onChange={e => context.handleInput(e, "newProduct")}
                  />
                  Mujer
                </div>
              </div>

              <div className="form-container">
                <tag>Pais</tag>
                <input
                  type="text"
                  name="lastname"
                  onChange={e => context.handleInput(e, "formSignup")}
                  // drop down con un json de paises... move it lady.
                  value="Pais"
                />
              </div>
            </div>
            {/* row3 */}
            <div className="row-container">
              <div className="form-container">
                <tag>Email</tag>
                <input
                  type="email"
                  name="email"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.email}
                />
              </div>
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

            <div className="form-container">
              <tag>Password</tag>
              <input
                type="password"
                name="password"
                onChange={e => context.handleInput(e, "formSignup")}
                value={context.formSignup.password}
              />
            </div>
          </div>

          <div>
            <p>
              Having acknowledged the information received through this Privacy
              Notice, pursuant to Article 13 of EU Regulation 679/2016, which I
              have read and understood, and aware that I am completely free to
              choose: I give consent for the handling of my personal information
              by MoMe for the distribution of commercial and informative
              material related to TOD’S or third-party products and services, to
              perform market research by MoMe for the participation of and/or
              events, by E-mail, SMS and by telephone or post. I give consent
              for TOD’S to use my personal information for commercial purposes,
              by analysing the type and frequency of purchases that I make on
              the web store, in order to create specially directed commercial
              material for me, from MoMe or third-parties, by email, SMS and by
              telephone or post.
            </p>
          </div>

          <button type="submit">Create the Account</button>
        </SignUpTag>
      )}
    </MyContext.Consumer>
  );
}
