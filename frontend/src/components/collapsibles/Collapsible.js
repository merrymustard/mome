import React from "react"
import styled from "styled-components"
import { MyContext } from "../../context"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import {
  CloseBtn,
  SlideMenuProf,
  StyledCollapsible,
  SlideCart
} from "./StylesCollapsable"
import { colors, TemplateBtn } from "../../styledComponents/StyledComps"

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
              <StyleLink to="/profile">Información Personal</StyleLink>
              <StyleLink to="/orders">Mis Ordenes</StyleLink>
              <StyleLink to="/profile-address">Direcciones</StyleLink>
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
              <div className="cart-products">
                <SlideCart>
                  {context.Cart.map(e => (
                    <>
                      <p>{e.name}</p>
                      <p>
                        {e.size} : {e.quantity}
                      </p>
                      <p>price: {e.price}</p>
                    </>
                  ))}
                </SlideCart>
                <button onClick={() => props.history.push("/order")}>
                  Submit Order
                </button>
                <p>Total: {context.totalValueCart}</p>
              </div>
            </>
          ) : null}
        </StyledCollapsible>
      )}
    </MyContext.Consumer>
  )
}
export default withRouter(Collapsible)
{
  /* {if {}}
          {items.map((item, idx) => (
            <Item key={idx} {...item} />
          ))} */
}
{
  /* {
            (navbar.user) 
            ? (<Link to="/profile"></Link>) 
            : (navbar.heart) 
            ? (
              <>
              <h2>WishList</h2>
              <div className = "wishlist-elements-container">
              {context.wishListProds.map(e=>(

                <h2>{e.name}</h2>

              ))}
              </div> 
              </>
              ) 
            : (navbar.shoppingcart)
            ? (
                <>
                <h2>Your Cart</h2>
              <div className = "cart-products">
                {context.Cart.map(e=>(
                  <p>{e.name} : {e.price}</p>
                ))}
                <p>Total: {state.Cart.map(e => ({}))} </p>
                </div>
                </>
              )
            : null
          } */
}
// export default Collapsible;

// export default function NavBar() {
//   return (
//     <MyContext.Consumer>
//       {context => (
//         <NavMain>
//           <Collapsible
//             items={[
//               {
//                 title: "a",
//                 body: "asdf"
//               }
//             ]}
//             open={context.open}
//           />
//           <h1 className="logo">MoMe</h1>
//           <div className="main-nav-icons">
//             <Icon.Heart size="24" color="white" />
//             <BtnTransparent onClick={context.switchOpen}>
//               <Icon.User size="24" color="white" />
//             </BtnTransparent>

//             <Icon.ShoppingCart size="24" color="white" />
//           </div>
//         </NavMain>
//       )}
//     </MyContext.Consumer>
//   );
// }
