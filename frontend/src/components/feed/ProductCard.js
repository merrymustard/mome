import React, { Component } from "react";
import { MyContext } from "../../context";
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
        <CardProdWrap>
          <Prodimg>
            <div className="heart-colored">
              <Icon.Heart size="24" color="black" />
            </div>
            <img src="/images/sweat3.png" alt="mainphoto" />
          </Prodimg>
          <SubHeaderHighC>{context.newProduct.brand}</SubHeaderHighC>
          <H3a>{context.newProduct.name}</H3a>
          <H3a>
            <strong>${context.newProduct.price}</strong>
          </H3a>
          <small>
            <a href="#">more colors available</a>
          </small>
        </CardProdWrap>
      )}
    </MyContext.Consumer>
  );
}
export default ProductCard;
