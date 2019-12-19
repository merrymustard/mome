import React, { Component } from "react"
// import { Link } from "react-router-dom";
import { MainWrapp, CenterizeMe } from "../../styledComponents/StyledComps"
import { FeedWrapper, FeedContainer } from "./StylesFeed"

import FilterBox from "./FilterBox"
import ProductCard from "./ProductCard"
import { MyContext } from "../../context"
import { DominoSpinner } from "react-spinners-kit"

export default class ProductFeed extends Component {
  state = {
    feed: []
  }
  showSettings(event) {
    event.preventDefault()
  }
  componentDidMount() {
    this.context.getProducts()
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <MainWrapp>
            {context.loading ? (
              <CenterizeMe>
                <DominoSpinner size={30} color="#ffffff" />
              </CenterizeMe>
            ) : (
              <FeedWrapper>
                <FilterBox />
                <FeedContainer>
                  {context.productFeed.map(e => (
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
            )}
          </MainWrapp>
        )}
      </MyContext.Consumer>
    )
  }
}
ProductFeed.contextType = MyContext
