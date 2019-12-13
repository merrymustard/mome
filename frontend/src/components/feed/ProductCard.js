import React, { Component } from "react";
import { MyContext } from "../../context";
import { CardProdWrap, Prodimg, SubHeaderHighC,H3a} from "../../styledComponents/StyledComps";
import * as Icon from "react-feather";

export default class ProductCard extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
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
            <SubHeaderHighC>Brand</SubHeaderHighC>
            <H3a>Product Name</H3a>
            <H3a><strong>$3000</strong></H3a>
            <small><a href="#">more colors available</a></small>

          </CardProdWrap>
        )}
      </MyContext.Consumer>
    );
  }
}
