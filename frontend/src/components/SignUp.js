import React from "react";
import { MyContext } from "../context";
import {
  SignUpTag,
  MainWrapperield,
  MainBtn,
  RowContainerRadio,
  CenterizeMe,
  RowContainer,
  SubHeaderHighC,
  H1a
} from "../styledComponents/StyledComps";

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
          <MainWrapperield>
            <H1a className="tenpix">Registro</H1a>
            <SubHeaderHighC className="tenpix">Datos Personales</SubHeaderHighC>
            <hr />
            {/* <small>*Campo obligatorio</small>*/}
            <br/> 
            {/* row1 */}
            <RowContainer>
              <div className="form-container">
                <label for="name">Nombre*</label>
                <input
                  type="text"
                  name="name"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.name}
                />
              </div>
              <div className="form-container">
                <label for="lastname">Apellido*</label>
                <input
                  type="text"
                  name="lastname"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.lastname}
                />
              </div>
            </RowContainer>
            {/* row2 */}
            <RowContainer>
              <div className="form-container">
                <label for="Username">Usuario*</label>
                <input
                  type="text"
                  name="username"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.username}
                />
              </div>

              <div className="form-container">
                <label for="country">Pais*</label>
                <input
                  type="text"
                  name="country"
                  onChange={e => context.handleInput(e, "formSignup")}
                  // drop down con un json de paises... move it lady.
                  value={context.formSignup.country}
                />
              </div>
            </RowContainer>
            {/* row3 */}
            <RowContainer>
              <div className="form-container">
                <label for="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.email}
                />
              </div>
              <div className="form-container">
                {/* genero radio */}
                <label for="category">Selecciona tu genero*</label>
                <RowContainerRadio
                  className="row-container-radio"
                  onChange={e => context.handleInput(e, "newProduct")}
                >
                  <p>
                    <input
                      type="radio"
                      id="test1"
                      name="category"
                      value="Hombre"
                      checked
                    />
                    <label for="test1">Hombre</label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="test2"
                      name="category"
                      value="Mujer"
                    />
                    <label for="test2">Mujer</label>
                  </p>
                </RowContainerRadio>
                {/* genero radio end */}
              </div>
            </RowContainer>

            {/* row 4 */}
            <RowContainer>
              <div className="form-container ">
                <label for="password">Password*</label>
                <input
                  type="password"
                  name="password"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.password}
                />
              </div>
            </RowContainer>
            <CenterizeMe>
              <MainBtn className="accenBtn" type="submit" value="Crear Cuenta"></MainBtn>
            </CenterizeMe>
          </MainWrapperield>

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
        </SignUpTag>
      )}
    </MyContext.Consumer>
  );
}
