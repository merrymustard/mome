import React, { Component } from "react"
import { MyContext } from "../context"
import {
  SignUpTag,
  MainWrapperield,
  RowContainerRadio,
  CenterizeMe,
  RowContainer,
  SubHeaderHighC,
  H1a,
  TemplateBtn
} from "../styledComponents/StyledComps"

export default class CreateOrder extends Component {
  handlerplus(e, i) {
    this.context.handleProductQtyOrder(i, false)
  }
  handlerles(e, i) {
    this.context.handleProductQtyOrder(i, false)
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <MainWrapperield>
            <h2>Your Cart</h2>
            <div className="cart-products">
              {context.Cart.map((e, i) => (
                <>
                  <p>{e.name}</p>
                  <p>Size:{e.size} </p>:
                  <button onClick={event => this.handler(event)}>+</button>
                  {e.quantity}
                  <button onClick={context.handleProductQtyOrder(i, true)}>
                    -
                  </button>
                  <p>price: {e.price}</p>
                </>
              ))}
            </div>
            <button onClick={context.submitOrder}>Submit Order</button>
            <p>Total: {context.totalValueCart}</p>
          </MainWrapperield>
        )}
      </MyContext.Consumer>
    )
  }
}
