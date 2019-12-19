import React, { Component } from "react"
// import { Link } from "react-router-dom";
import { MainWrapp, CenterizeMe } from "../../styledComponents/StyledComps"
import { FeedWrapper, FeedContainer } from "../feed/StylesFeed"

import FilterBox from "../feed/FilterBox"
import ProductCard from "../feed/ProductCard"
import { MyContext } from "../../context"
import { DominoSpinner } from "react-spinners-kit"

export default class CatMen extends Component {
  componentDidMount() {
    this.context.getManProducts()
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <MainWrapp>
            <FeedWrapper>
              <FilterBox />
              <FeedContainer>
                {context.manProducts.map(e => (
                  <div
                    onClick={event => {
                      context.getProductDetail(e._id, () =>
                        this.props.history.push("/detail")
                      )
                    }}
                  >
                    <ProductCard product={e} />
                  </div>
                ))}
              </FeedContainer>
            </FeedWrapper>
          </MainWrapp>
        )}
      </MyContext.Consumer>
    )
  }
}
CatMen.contextType = MyContext
