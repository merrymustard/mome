import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  MainWrapp,
  FeedWrapper,
 FeedContainer
} from "../../styledComponents/StyledComps";
import FilterBox from "./FilterBox"
import ProductCard from "./ProductCard";
import { MyContext } from "../../context";

export default class ProductFeed extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <MainWrapp>
            <FeedWrapper>
              <FilterBox/>
              <FeedContainer>
                <ProductCard />
                <ProductCard />
              </FeedContainer>
            </FeedWrapper>
          </MainWrapp>
        )}
      </MyContext.Consumer>
    );
  }
}
