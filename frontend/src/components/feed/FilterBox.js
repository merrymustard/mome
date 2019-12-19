import React, { Component } from "react"
import { SubHeaderHighC } from "../../styledComponents/StyledComps"
import {
  FitlerCard,
  FilterSections,
  FilterSectionsVertical
} from "./StylesFeed"
// import Checkbox from "./Checkbox"
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
            <SubHeaderHighC>Categorias</SubHeaderHighC>
            <FilterSectionsVertical>
              <div>
                <input type="checkbox" name="men" value="Hombre" />
                <label>Hombre</label>
              </div>
              <div>
                <input type="checkbox" name="men" value="Hombre" />
                <label>Mujer</label>
              </div>
            </FilterSectionsVertical>
            <br />
            <SubHeaderHighC>Marca</SubHeaderHighC>
            <FilterSectionsVertical>
              <div>
                <input type="checkbox" name="men" value="Hombre" />
                <label>LoL</label>
              </div>
              <div>
                <input type="checkbox" name="men" value="Hombre" />
                <label>MexMar</label>
              </div>
            </FilterSectionsVertical>
            <br />
            <SubHeaderHighC>Color</SubHeaderHighC>
            <FilterSections>
              <div className="blu-circle"></div>
              <div className="red-circle"></div>
              <div className="yellow-circle"></div>
              <div className="green-circle"></div>
              <div className="white-circle"></div>
              <div className="purple-circle"></div>
            </FilterSections>
            {/* <div>
              <SubHeaderHighC>Price</SubHeaderHighC>
            </div> */}
          </FitlerCard>
        )}
      </MyContext.Consumer>
    )
  }
}
