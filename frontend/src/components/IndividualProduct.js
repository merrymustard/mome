import React, { Component } from "react";
import { MyContext } from "../context";
import {
  ProductCard,
  MainWrapp,
  RowContainer,
  SubHeaderHighC,
  ProducInfo,
  H1a,
  TemplateBtn,TemplateBtnWhite
} from "../styledComponents/StyledComps";

export default class IndividualProduct extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <MainWrapp>
            <RowContainer>
              <ProductCard></ProductCard>
              <ProducInfo>
                <SubHeaderHighC>Brand Name</SubHeaderHighC>
                <H1a>Product Name</H1a>
                <p className="price-num">$3000</p>
                <div className="button-container">
                  <TemplateBtn>Add to cart</TemplateBtn>
                  <TemplateBtnWhite > Add to wish list></TemplateBtnWhite>
                </div>
              </ProducInfo>
            </RowContainer>
          </MainWrapp>
        )}
      </MyContext.Consumer>
    );
  }
}
