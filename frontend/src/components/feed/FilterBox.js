import React, { Component } from "react";
import {
  FitlerCard,
  SubHeaderHighC, } from "../../styledComponents/StyledComps";
import Checkbox from "./Checkbox";
import { MyContext } from "../../context";

export default class FilterBox extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
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
                  <label>
                    <Checkbox
                      name="m"
                      value="m"
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
        )}
      </MyContext.Consumer>
    );
  }
}
