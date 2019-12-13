import React, { Component } from "react";
import { MyContext } from "../../context";
import { CardProdWrap } from "../../styledComponents/StyledComps";

export default class ProductCard extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <CardProdWrap>
            <img src="/images/sweat3.png" alt="mainphoto" />
            <p>Product Name</p>
            <p>Product details</p>
          </CardProdWrap>
        )}
      </MyContext.Consumer>
    );
  }
}
