import React from "react"
import { MyContext } from "../../context"
import Carousel from "./Carousel"
import * as Icon from "react-feather"
import {
  MainWrapp,
  RowContainer,
  SubHeaderHighC,
  H1a,
  TemplateBtn,
  TemplateBtnWhite
} from "../../styledComponents/StyledComps"

import {
  ProductCard,
  ProducInfo,
  SizeContainer,
  QtytyBtns,
  AddSubstractBtn,
  CarouselHorizontal,
  BtnCarousel,
  ThumbnaiProduct,
  Pleft
} from "./StylesSingleProd"

// export const productqty = styled.div`
//   width: 75px;
//   background-color: white;
//   color: blue;
//   text-align: center;
// `
function IndividualProduct(props) {
  // state = {
  //   quantity: 0
  // }
  // showSettings(event) {
  //   event.preventDefault()
  // }

  return (
    <MyContext.Consumer>
      {context => (
        <MainWrapp>
          <RowContainer>
            <ProductCard>
              <CarouselHorizontal>
                <BtnCarousel>
                  <Icon.ChevronUp size="30" />
                </BtnCarousel>

                {context.productDetail.images.map((e, i) => (
                  <ThumbnaiProduct src={e} alt="photito" />
                ))}
                <BtnCarousel>
                  <Icon.ChevronDown size="30" />
                </BtnCarousel>
              </CarouselHorizontal>

              <img src={context.productDetail.images[0]} alt="main" />
            </ProductCard>
            <ProducInfo>
              <SubHeaderHighC>{context.productDetail.brand}</SubHeaderHighC>
              <H1a>{context.productDetail.name}</H1a>
              <p>{context.productDetail.caption}</p>
              <p className="price-num">
                $ {String(context.productDetail.price)}
              </p>
              <p>Selecciona una talla</p>
              <form
                onSubmit={ e => {
                  e.preventDefault();
                  context.addProductToCart();
                }}
              >
                <SizeContainer>
                  <button
                    name="size"
                    onClick={e => {
                      e.preventDefault()
                      context.handleSize(e)
                    }}
                    value="XS"
                  >
                    XS
                  </button>
                  <button
                    name="size"
                    onClick={e => {
                      e.preventDefault()
                      context.handleSize(e)
                    }}
                    value="S"
                  >
                    S
                  </button>
                  <button
                    name="size"
                    onClick={e => {
                      e.preventDefault()
                      context.handleSize(e)
                    }}
                    value="M"
                  >
                    M
                  </button>
                  <button
                    name="size"
                    onClick={e => {
                      e.preventDefault()
                      context.handleSize(e)
                    }}
                    value="L"
                  >
                    L
                  </button>
                  <button
                    name="size"
                    onClick={e => {
                      e.preventDefault()
                      context.handleSize(e)
                    }}
                    value="XL"
                  >
                    XL
                  </button>
                </SizeContainer>
                <br />
                <QtytyBtns>
                  <AddSubstractBtn
                    onClick={e => {
                      e.preventDefault()
                      context.handleProductQty(false)
                    }}
                  >
                    -
                  </AddSubstractBtn>
                  <div className="quantity">
                    <p>{String(context.newCartProduct.quantity)}</p>
                  </div>
                  <AddSubstractBtn
                    onClick={e => {
                      e.preventDefault()
                      context.handleProductQty(true)
                    }}
                  >
                    +
                  </AddSubstractBtn>
                </QtytyBtns>
                <br />
                <div className="button-container">
                  <TemplateBtn type="submit">Add to cart</TemplateBtn>
                  <TemplateBtnWhite>Add to wish list</TemplateBtnWhite>
                </div>
              </form>

              <p>share son social media?</p>
            </ProducInfo>
          </RowContainer>
          <br />
          <br />
          <br />
          <RowContainer>
            <SubHeaderHighC>Descripcion</SubHeaderHighC>
            {/* <SubHeaderHighC>Garantia</SubHeaderHighC>
            <SubHeaderHighC>Reviews</SubHeaderHighC> */}
          </RowContainer>
          <Pleft>{context.productDetail.details}</Pleft>
        </MainWrapp>
      )}
    </MyContext.Consumer>
  )
}

export default IndividualProduct
