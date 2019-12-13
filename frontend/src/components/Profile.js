
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
  H1a,TemplateBtn
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
            <H1a className="tenpix">Perfil</H1a>
            <SubHeaderHighC className="tenpix">Datos Personales</SubHeaderHighC>
            <hr/>
            {/* <small>*Campo obligatorio</small>*/}
            <br/> 
            {/* row1 */}
            <RowContainer>
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
                <label for="country">Pais</label>
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
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.email}
                />
              </div>
              <div className="form-container">
                {/* genero radio */}
                <label for="category">Tu</label>
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
            <br/>
            <CenterizeMe>
              <TemplateBtn className="accenBtn" type="submit" value="save">Guardar Cambios</TemplateBtn>
            </CenterizeMe>
            <br/>
            {/* row 4 */}
            <RowContainer>
              <div className="form-container ">
                <label for="password">Contraseña Actual*</label>
                <input
                  type="password"
                  name="password"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.password}
                />
              </div>
              <div className="form-container ">
                <label for="password">Contraseña nueva*</label>
                <input
                  type="password"
                  name="password-new"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.password}
                />
              </div>
            </RowContainer>
            <br/>
            <CenterizeMe>
              <MainBtn className="accenBtn" type="submit" value="change-password">Cambiar contraseña</MainBtn>
            </CenterizeMe>
          </MainWrapperield>
        </SignUpTag>
      )}
    </MyContext.Consumer>
  );
}
