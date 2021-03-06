import React, { Component } from "react";
import {Link} from "react-router-dom"
import { MyContext } from "../context";
import { NavSide } from "../styledComponents/StyledComps";

export default class NavProfileSide extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <NavSide>
            {/* boton x para cerrar y abrir */}
            <h2>Bienvenido</h2>
            <h3>John Doe</h3>
            <ul>
              <li>
                <a>Mi perfil</a>
              </li>
              <li>
                <a>Mis Pedidos</a>
              </li>
              <li>
                <a>Mis Tarjetas</a>
              </li>
              <li>
                <a>Mis Favoritos</a>
              </li>
            </ul>
            {context.loggedUser ? (<Link to= "/login">Login</Link>): (<button onClick = {context.handleLogout}>Logout</button>)}
          </NavSide>
        )}
      </MyContext.Consumer>
    );
  }
}
