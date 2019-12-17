import React, { Component } from "react";
import { MyContext } from "../../context";
import {Link} from "react-router-dom"
import {
  CardProdWrap,
  Prodimg,
  SubHeaderHighC,
  H3a
} from "../../styledComponents/StyledComps";
import * as Icon from "react-feather";

function ProductCard(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <Link to="/detail">
        <CardProdWrap >
        {/* id={props.product._id} onClick = {e => context.getProductDetail(e,()=>{props.history.push("/detail")})} */}
          <Prodimg>
            {/* <div className="heart-colored">
              <Icon.Heart size="24" color="black" />deleteProductFromWishlist
            </div> */}
            {
            context.loggedUser 
            ? (
              context.wishListProds.includes(props.product._id)
              ? (
                <button 
                id = {props.product._id} 
                onClick={e=> context.deleteProductFromWishlist(e)}>
                RemoveFromWishList</button>
                )
              : (
                <button 
                id = {props.product._id} 
                onClick = {e=> context.addProductToWishlist(e)}>
                AddToWishList</button>)
                )
              : null 
            }
            <img src="/images/sweat3.png" alt="mainphoto" />
          </Prodimg>
          <SubHeaderHighC>{props.product.brand}</SubHeaderHighC>
          <H3a>{props.product.name}</H3a>
          <H3a>
            <strong>${props.product.price}</strong>
          </H3a>
          {/* <small>
            <a href="#">more colors available</a>
          </small> */}
          
        </CardProdWrap>
        </Link>
      )}
    </MyContext.Consumer>
  );
}
export default ProductCard;
