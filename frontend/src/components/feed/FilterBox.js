import React, { Component } from "react"
import {
  SubHeaderHighC,
  FilterSections,
  FilterSectionsVertical
} from "../../styledComponents/StyledComps"
import { FitlerCard } from "./StylesFeed"
import Checkbox from "./Checkbox"
import { MyContext } from "../../context"

export default class FilterBox extends Component {
  showSettings(event) {
    event.preventDefault()
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <FitlerCard>
            <SubHeaderHighC>Category</SubHeaderHighC>
            <FilterSections>
              <label>
                <input type="checkbox" name="men" value="Hombre" />
                <span style={{ marginLeft: 8 }}>Hombre</span>
              </label>
              <br />
              <label>
                <input type="checkbox" name="women" value="Mujer" />
                <span style={{ marginLeft: 8 }}>Mujer</span>
              </label>
            </FilterSections>
            <SubHeaderHighC>Brand</SubHeaderHighC>

            <FilterSectionsVertical>
              <div>
                <input type="checkbox" name="men" value="Hombre" />
                <label>Brand</label>
              </div>
              <div>
                <input type="checkbox" name="men" value="Hombre" />
                <label>Brand</label>
              </div>
            </FilterSectionsVertical>
            <SubHeaderHighC>Color</SubHeaderHighC>
            <FilterSections>
              <input type="checkbox" name="red" value="red" />
            </FilterSections>
            {/* <div className="checkboxwrapper">
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
            </div> */}
            <div>
              <SubHeaderHighC>Price</SubHeaderHighC>
            </div>
          </FitlerCard>
        )}
      </MyContext.Consumer>
    )
  }
}
