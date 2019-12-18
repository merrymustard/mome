import React from "react"
import { MyContext } from "../../context"
import { Link } from "react-router-dom"
import { SubHeaderHighC, H3a } from "../../styledComponents/StyledComps"
import { CardProdWrap, Prodimg } from "./StylesFeed"

function ProductCard(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <Link to="/detail">
          <CardProdWrap>
            {/* id={props.product._id} onClick = {e => context.getProductDetail(e,()=>{props.history.push("/detail")})} */}
            <Prodimg>
              <img src="/images/sweat3.png" alt="mainphoto" />
            </Prodimg>
            <SubHeaderHighC>{props.product.brand}</SubHeaderHighC>
            <H3a>{props.product.name}</H3a>
            <H3a>
              <strong>${props.product.price}</strong>
            </H3a>
            <div>
              {context.loggedUser ? (
                context.wishListProds.includes(props.product._id) ? (
                  <button
                    id={props.product._id}
                    onClick={e => context.deleteProductFromWishlist(e)}
                  >
                    RemoveFromWishList
                    <i class="fas fa-heart"></i>
                  </button>
                ) : (
                  <button
                    id={props.product._id}
                    onClick={e => context.addProductToWishlist(e)}
                  >
                    <i class="far fa-heart"></i>
                  </button>
                )
              ) : null}
            </div>
          </CardProdWrap>
        </Link>
      )}
    </MyContext.Consumer>
  )
}
export default ProductCard
