import React, { Component } from "react"
import { Link } from "react-router-dom"
import Collapsible from "../components/collapsibles/Collapsible"
import { MyContext } from "../context"
import {
  NavMain,
  BtnTransparent,
  colors
} from "../styledComponents/StyledComps"
import * as Icon from "react-feather"
import styled from "styled-components"

const CatButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 1em;
  padding: 10px 10px;
  transition: all .2s ease-in-out;
  &:hover {
		color: ${colors.purple01}
		transform: scale(1.3);   
    }
`

const StyleLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  h1 {
    transition: all 0.2s ease-in-out;
  }
  h1:hover {
    color: #f07b7b;
    transform: scale(1.2);
  }
`

class NavBar extends Component {
  state = {
    navbar: {
      heart: false,
      user: false,
      shoppingcart: false
    }
  }

  handleClick = (e, icon) => {
    if (icon === "heart") {
      this.setState({
        navbar: {
          heart: true,
          user: false,
          shoppingcart: false
        }
      })
    } else if (icon === "user") {
      this.setState({
        navbar: {
          heart: false,
          user: true,
          shoppingcart: false
        }
      })
    } else if (icon === "shoppingcart") {
      this.setState({
        navbar: {
          heart: false,
          user: false,
          shoppingcart: true
        }
      })
    }
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <NavMain>
            <Collapsible navbar={this.state.navbar} open={context.open} />
            <div className="main-nav-icons">
              <StyleLink to="/">
                <h1 className="logo redUnder">MoMe</h1>
              </StyleLink>
              <StyleLink to="/man">
                <CatButton>Hombres</CatButton>
              </StyleLink>
              <StyleLink to="/woman">
                <CatButton>Mujeres</CatButton>
              </StyleLink>
              {/* <StyleLink to="/feed">
                <CatButton>Toda</CatButton>
              </StyleLink> */}
            </div>

            {context.loggedUser ? (
              <div className="main-nav-icons">
                <BtnTransparent
                  iicon="1"
                  onClick={e => {
                    this.handleClick(e, "heart")
                    context.toggleMenu(e)
                  }}
                >
                  <i class="fas fa-heart fa-2x"></i>
                </BtnTransparent>

                <BtnTransparent
                  onClick={e => {
                    this.handleClick(e, "user")
                    context.toggleMenu(e)
                  }}
                >
                  <i class="fas fa-user fa-2x"></i>
                </BtnTransparent>

                <BtnTransparent
                  onClick={e => {
                    this.handleClick(e, "shoppingcart")
                    context.toggleMenu(e)
                  }}
                >
                  <i class="fas fa-shopping-bag fa-2x"></i>
                </BtnTransparent>
              </div>
            ) : (
              <Link to="/login">
                <Icon.User icon={"user"} size="24" color="white" />
              </Link>
            )}
          </NavMain>
        )}
      </MyContext.Consumer>
    )
  }
}

export default NavBar
