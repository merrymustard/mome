import React from "react";
import { MyContext } from "../context";
import { NavMain } from "../styledComponents/StyledComps";
import * as Icon from "react-feather";



export default function NavBar() {
  return (
    <MyContext.Consumer>
      {context => (
        <NavMain>
          <h1 className="logo">MoMe</h1>
          <div className="main-nav-icons">
            <Icon.Heart size="24" color="white"/>
            <Icon.User size="24" color="white"/>
            <Icon.ShoppingCart size="24" color="white"/>
          </div>
        </NavMain>
      )}
    </MyContext.Consumer>
  );
}
