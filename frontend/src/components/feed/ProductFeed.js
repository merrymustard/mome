import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  MainWrapp,
  FeedWrapper,
  FitlerCard,
  SubHeaderHighC, FeedContainer
} from "../../styledComponents/StyledComps";
import ProductCard from "./ProductCard";
import Checkbox from "./Checkbox";
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
              <FitlerCard>
                <div>
                  <SubHeaderHighC>Brand</SubHeaderHighC>
                  <input value="drop down marcas" />
                </div>
                <div>
                  <SubHeaderHighC>Color</SubHeaderHighC>
                </div>
                <div className="checkboxwrapper">
                  <label>
                    <Checkbox
                      name="small"
                      value="s"
                      checked={context.checked}
                      onChange={context.handleCheckboxChange}
                    />
                    <span style={{ marginLeft: 8 }}>Label Text</span>
                  </label>
                </div>
                <div>
                  <SubHeaderHighC>Price</SubHeaderHighC>
                </div>
              </FitlerCard>
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
