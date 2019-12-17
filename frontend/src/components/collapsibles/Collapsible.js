import React from "react";
import styled from "styled-components";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";
import { colors, TemplateBtn } from "../../styledComponents/StyledComps";

const StyledCollapsible = styled.section`
  padding: 20px;
  position: relative;
  background: white;
  ${"" /* position: fixed; */}
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  min-width: 400px;
  bottom: 0;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: auto 1fr auto;
  /* esto es la magia */
  z-index: 200;
  transform: translateX(100%);
  transition: all 0.3s;
  ${props => props.open && `transform: translateX(0);`};
`;
const StyledItem = styled.div``;

const RenderItem = (item, route) => {
  return (
    <StyleLink to={item}>
      <StyledItem>{item}</StyledItem>
    </StyleLink>
  );
};

const StyleLink = styled(Link)`
  color: ${colors.darkBlack};
  text-decoration: none;
  padding: 20px;
  font-size: 1.4rem;
`;

const SlideMenuProf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Collapsible(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <StyledCollapsible open={props.open}>
          <button onClick={context.toggleMenu}>X</button>
          {props.navbar.user ? (
            <SlideMenuProf>
              <StyleLink to="/profile">Profile</StyleLink>
              <StyleLink to="/orders">My Orders</StyleLink>
              <StyleLink to="/profile-address">Adresses</StyleLink>
              <TemplateBtn onClick={context.handleLogout}>Logout</TemplateBtn>
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
              <h2>Your Cart</h2>
              <div className="cart-products">
                {context.Cart.map(e => (
                  <>
                    <p>{e.name}</p>
                    <p>
                      {e.size} : {e.quantity}
                    </p>
                    <p>price: {e.price}</p>
                  </>
                ))}
                <button onClick={context.submitOrder}>Submit Order</button>
                <p>Total: {context.totalValueCart}</p>
              </div>
            </>
          ) : null}
        </StyledCollapsible>
      )}
    </MyContext.Consumer>
  );
}
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
