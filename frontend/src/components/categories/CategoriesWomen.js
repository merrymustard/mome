import React, { Component } from "react"
import { MainWrapp } from "../../styledComponents/StyledComps"
import { FeedWrapper, FeedContainer } from "../feed/StylesFeed"
import FilterBox from "../feed/FilterBox"
import ProductCard from "../feed/ProductCard"
import { MyContext } from "../../context"

export default class CatWomen extends Component {
  componentDidMount() {
    this.context.getWomanProducts()
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <MainWrapp>
            <FeedWrapper>
              <FilterBox />
              <FeedContainer>
                {context.womanProducts.map(e => (
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
CatWomen.contextType = MyContext
