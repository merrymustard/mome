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
    navbar:{
      heart: false,
      user: false,
      shoppingcart: false
    }
  };

  handleClick = (e, icon) => {
    if (icon === "heart") {
      this.setState({navbar:{
        heart:true,
        user:false,
        shoppingcart:false}})
    } else if (icon === "user") {
      this.setState({navbar:{
        heart:false,
        user:true,
        shoppingcart:false}});
    } else if (icon === "shoppingcart") {
      this.setState({navbar:{
        heart:false,
        user:false,
        shoppingcart:true}});
    }
  };
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <NavMain>
            <Collapsible navbar={this.state.navbar} open={context.open} />
            <div className="main-nav-icons">
              <StyleLink to="/">
                <h1 className="logo">MoMe</h1>
              </StyleLink>
              <CatButton>Hombres</CatButton>
              <CatButton>Mujeres</CatButton>
              <StyleLink to="/feed">
                <h1 className="logo">feed</h1>
              </StyleLink>
            </div>

            {context.loggedUser ? (<div className="main-nav-icons">
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
            </div>) : (
                <Link to="/login"><Icon.User icon={"user"} size="24" color="white" /></Link>
              )}

            
          </NavMain>
        )}
      </MyContext.Consumer>
    );
  }
}

export default NavBar;
