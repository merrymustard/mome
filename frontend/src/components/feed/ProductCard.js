import React from "react"
import { MyContext } from "../../context"
import { Link } from "react-router-dom"
import {
  SubHeaderHighC,
  H3a,
  StyleLink,
  RowContainer,
  BtnTransparent
} from "../../styledComponents/StyledComps"
import { CardProdWrap, Prodimg } from "./StylesFeed"

export default function ProductCard(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <StyleLink to="/detail">
          <CardProdWrap>
            {/* id={props.product._id} onClick = {e => context.getProductDetail(e,()=>{props.history.push("/detail")})} */}
            <Prodimg>
              <img src={props.product.images[0]} alt="mainphoto" />
            </Prodimg>
            <SubHeaderHighC>{props.product.brand}</SubHeaderHighC>
            <H3a>{props.product.name}</H3a>
            <H3a>
              <RowContainer>
                <strong>${props.product.price}</strong>
                <div>
                  {context.loggedUser ? (
                    context.wishListProds.includes(props.product._id) ? (
                      <BtnTransparent
                        id={props.product._id}
                        onClick={e => context.deleteProductFromWishlist(e)}
                      >
                        RemoveFromWishList
                        <i class="fas fa-heart fa-lg"></i>
                      </BtnTransparent>
                    ) : (
                      <BtnTransparent
                        id={props.product._id}
                        onClick={e => context.addProductToWishlist(e)}
                      >
                        <i class="far fa-heart fa-lg"></i>
                      </BtnTransparent>
                    )
                  ) : null}
                </div>
              </RowContainer>
            </H3a>
          </CardProdWrap>
        </StyleLink>
      )}
    </MyContext.Consumer>
  )
}
