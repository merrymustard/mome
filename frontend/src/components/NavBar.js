import React, { Component } from "react";
import { Link } from "react-router-dom";
import Collapsible from "../components/collapsibles/Collapsible";
import { MyContext } from "../context";
import {
  NavMain,
  BtnTransparent,
  CatButton
} from "../styledComponents/StyledComps";
import * as Icon from "react-feather";
import styled from "styled-components";

const StyleLink = styled(Link)`
  color: red;
`;

class NavBar extends Component {
  state = {
    heart: {},
    user: {},
    shoppingCart: {}
  };

  handleClick = (e, icon) => {
    if (icon === "heart") {
      this.setState({
        heart: {
          Likes: "Likes"
        },
        user: {},
        shoppingCart: {}
      });
    } else if (icon === "user") {
      this.setState({
        heart: {},
        user: {
          info: "info",
          orden: "orden",
          address: "address",
          logout: "logout"
        },
        shoppingCart: {}
      });
    } else if (icon === "shoppingcart") {
      this.setState({
        heart: {},
        user: {},
        shoppingCart: {
          shoppingCart: "products"
        }
      });
    }
  };
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <NavMain>
            <Collapsible items={[this.state]} open={context.open} />
            <div className="main-nav-icons">
              <StyleLink to="/">
                <h1 className="logo">MoMe</h1>
              </StyleLink>
              <CatButton>Hombres</CatButton>
              <CatButton>Mujeres</CatButton>
            </div>

            <div className="main-nav-icons">
              <BtnTransparent
                iicon="1"
                onClick={e => {
                  this.handleClick(e, "heart");
                  context.toggleMenu(e);
                }}
              >
                <Icon.Heart icon={"heart"} size="24" color="white" />
              </BtnTransparent>

              <BtnTransparent
                onClick={e => {
                  this.handleClick(e, "user");
                  context.toggleMenu(e);
                }}
              >
                <Icon.User icon={"user"} size="24" color="white" />
              </BtnTransparent>

              <BtnTransparent
                onClick={e => {
                  this.handleClick(e, "shoppingcart");
                  context.toggleMenu(e);
                }}
              >
                <Icon.ShoppingCart
                  icon={"shoppingcart"}
                  size="24"
                  color="white"
                />
              </BtnTransparent>
            </div>
          </NavMain>
        )}
      </MyContext.Consumer>
    );
  }
}

export default NavBar;
