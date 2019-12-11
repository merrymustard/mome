import React from "react";
import { MyContext } from "../context";
import { ProfileTag, MainWrapperield } from "../styledComponents/StyledComps";

export default function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <ProfileTag>
          <MainWrapperield>
            <h1>Información Personal</h1>

            {/* row1 */}
            <div className="row-container">
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
                  value="Apellido"
                />
              </div>
            </div>
            {/* row2 */}
            <div className="row-container">
              <div className="form-container">
                {/* genero radio */}
                <label for="category">Selecciona tu genero*</label>
                <div
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
                </div>
                {/* genero radio end */}
              </div>

              <div className="form-container">
                <label for="country">Pais*</label>
                <input
                  type="text"
                  name="country"
                  onChange={e => context.handleInput(e, "formSignup")}
                  // drop down con un json de paises... move it lady.
                  value="Pais"
                />
              </div>
            </div>
            {/* row3 */}
            <div className="row-container">
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
                <label for="Username">Usuario</label>
                <input
                  type="text"
                  name="username"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.username}
                />
              </div>
            </div>

            {/* button update personal info */}
            <div className="form-container main-btn">
              <input type="button" value="Guardar cambios" />
            </div>

            {/* row 4 */}
            <div className="row-container">
              <div className="form-container ">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.password}
                />
              </div>
            </div>
          </MainWrapperield>
        </ProfileTag>
      )}
    </MyContext.Consumer>
  );
}
