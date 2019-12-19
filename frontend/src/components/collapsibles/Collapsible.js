import React from "react"
import styled from "styled-components"
import { MyContext } from "../../context"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import {
  CloseBtn,
  SlideMenuProf,
  StyledCollapsible,
  SlideCart,
  ProductCart,
  ProdInfoSideCart
} from "./StylesCollapsable"
import {
  colors,
  TemplateBtn,
  H1a,
  SubHeaderHighC
} from "../../styledComponents/StyledComps"

const StyleLink = styled(Link)`
  color: ${colors.darkBlack};
  text-decoration: none;
  padding: 20px;
  font-size: 1.4rem;
`

function Collapsible(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <StyledCollapsible open={props.open}>
          <CloseBtn onClick={context.toggleMenu}>
            <i class="fas fa-times fa-md"></i>
          </CloseBtn>
          {props.navbar.user ? (
            <SlideMenuProf>
              <StyleLink to="/profile">
                <SubHeaderHighC>Información Personal</SubHeaderHighC>
              </StyleLink>
              <StyleLink to="/orders">
                <SubHeaderHighC>Mis Ordenes</SubHeaderHighC>
              </StyleLink>
              <StyleLink to="/profile-address">
                <SubHeaderHighC>Direcciones</SubHeaderHighC>
              </StyleLink>
              <br />
              <br />
              <br />
              <TemplateBtn onClick={context.handleLogout}>
                Cerrar Sesión
              </TemplateBtn>
            </SlideMenuProf>
          ) : props.navbar.heart ? (
            <>
              <h2>WishList</h2>
              <div className="wishlist-elements-container">
                {context.wishListProds.map(e => (
                  <h2>{e.name}</h2>
                ))}
              </div>
            </>
          ) : props.navbar.shoppingcart ? (
            <>
              <h2>Carrito</h2>
              <ProductCart>
                <SlideCart>
                  {context.Cart.map(e => (
                    <ProdInfoSideCart>
                      <img src={e.images[1]} alt="patatas" />
                      <div>
                        <hr />
                        <span>
                          <h5>{e.name}</h5>
                          <h4>
                            {e.size} : {e.quantity}
                          </h4>
                        </span>
                      </div>
                      <div>
                        <hr />
                        <span>
                          <h4>$ {e.price}</h4>
                        </span>
                      </div>
                    </ProdInfoSideCart>
                  ))}
                </SlideCart>
                <TemplateBtn onClick={() => props.history.push("/order")}>
                  Hacer pedido
                </TemplateBtn>
                <p>Total: {context.totalValueCart}</p>
              </ProductCart>
              >
            </>
          ) : null}
        </StyledCollapsible>
      )}
    </MyContext.Consumer>
  )
}
export default withRouter(Collapsible)
