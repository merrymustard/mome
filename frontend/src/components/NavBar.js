import React from "react";
import { MyContext } from "../context";
import { NavMain } from "../styledComponents/StyledComps";
import Icon from "@mdi/react";
import NavProfileSide from "../components/NavProfileSide"

import {
  mdiAccountCircleOutline,
  mdiHeartOutline,
  mdiCartOutline
} from "@mdi/js";

export default function NavBar() {
  return (
    <MyContext.Consumer>
      {context => (
        <NavMain>
          <h1 className="logo">MoMe</h1>
          <div className="main-nav-icons">
            <Icon className="icons-main-nav"
              path={mdiHeartOutline}
              title="Heart Favorites"
              size={1}
              color="white"
            />
            <Icon
              path={mdiAccountCircleOutline}
              title="User Profile"
              size={1}
              color="white"
            />

            <Icon
              path={mdiCartOutline}
              title="User Profile"
              size={1}
              color="white"
            />
          </div>
        </NavMain>
      )}
    </MyContext.Consumer>
  );
}
