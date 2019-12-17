import React, { Component } from "react";
import { MyContext } from "../../context";
import Carousel from "./Carousel";
import * as Icon from "react-feather";
import styled from "styled-components"

import {
  ProductCard,
  MainWrapp,
  RowContainer,
  SubHeaderHighC,
  ProducInfo,
  H1a,
  TemplateBtn,
  TemplateBtnWhite,
  ThumbnaiProduct,
  CarouselHorizontal,
  BtnCarousel,
  QtytyBtns,
  AddSubstractBtn,
  SizeContainer
} from "../../styledComponents/StyledComps";

export const productqty = styled.div`
  width: 75px;
  background-color:white;
  color:blue;
  text-align:center`

export default class IndividualProduct extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
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
                  <ThumbnaiProduct src="/images/sweat3.png" alt="name" />
                  <ThumbnaiProduct src="/images/sweat1.png" alt="name" />
                  <ThumbnaiProduct src="/images/sweat2.png" alt="name" />
                  <ThumbnaiProduct src="/images/sweat4.png" alt="name" />
                  <ThumbnaiProduct src="/images/sweat5.png" alt="name" />
                  <BtnCarousel>
                    <Icon.ChevronDown size="30" />
                  </BtnCarousel>
                </CarouselHorizontal>

                <img src="/images/sweat3.png" alt="main" />
              </ProductCard>
              <ProducInfo>
                <SubHeaderHighC>Brand Name</SubHeaderHighC>
                <H1a>Product Name</H1a>
                <p>
                  Duis arcu massa, accumsan sit amet turpis in, pharetra
                  pulvinar purus.
                </p>
                <p className="price-num">$3000</p>
                <p>Color selection</p>
                <p>Size selection</p>
                <form onSubmit = {e=> {e.preventDefault(); context.addProductToCart() }} > 
                <SizeContainer>
                  <button name="size" onClick={e => {e.preventDefault(); context.handleSize(e)}} value="XS">XS</button>
                  <button name="size" onClick={e => {e.preventDefault(); context.handleSize(e)}} value="S">S</button>
                  <button name="size" onClick={e => {e.preventDefault(); context.handleSize(e)}} value="M">M</button>
                  <button name="size" onClick={e => {e.preventDefault(); context.handleSize(e)}} value="L">L</button>
                  <button name="size" onClick={e => {e.preventDefault(); context.handleSize(e)}} value="XL">XL</button>
                </SizeContainer>
                <br />
                <QtytyBtns>
                  <AddSubstractBtn onClick={e => {e.preventDefault(); context.handleProductQty(false)}}>-</AddSubstractBtn>
                  <div className="quantity">
                    <p>{String(context.newProduct.quantity)}</p>
                  </div>
                  <AddSubstractBtn onClick={e => {e.preventDefault(); context.handleProductQty(true)}}>+</AddSubstractBtn>
                </QtytyBtns>
                <br />
                <div className="button-container">
                  <TemplateBtn type="submit">Add to cart</TemplateBtn>
                  <TemplateBtnWhite>
                    Add to wish list
                    {/* <Icon.Heart size="16" /> */}
                  </TemplateBtnWhite>
                </div>
                </form>

                <p>share son social media?</p>
              </ProducInfo>
            </RowContainer>
            <br />
            <RowContainer>
              <SubHeaderHighC>Descripcion</SubHeaderHighC>
              <SubHeaderHighC>Garantia</SubHeaderHighC>
              <SubHeaderHighC>Reviews</SubHeaderHighC>
            </RowContainer>
            <RowContainer>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas in est ut magna posuere pharetra in vitae elit. Quisque
                non faucibus lacus. In ante ex, commodo quis vulputate ac,
                viverra a magna. Praesent eget accumsan orci. Morbi lacinia
                ligula id tincidunt imperdiet. Phasellus hendrerit sollicitudin
                purus non elementum. Fusce id justo dolor. Etiam quam massa,
                posuere vitae eros eu, faucibus auctor lacus. Nam varius euismod
                fermentum. Quisque placerat varius tortor et pellentesque. Nulla
                tincidunt condimentum nisi eu ultricies. In convallis nisi
                purus, eu tincidunt velit semper sed. Donec ullamcorper
                pellentesque mi quis cursus. Duis arcu massa, accumsan sit amet
                turpis in, pharetra pulvinar purus. In hac habitasse platea
                dictumst. Nulla ut imperdiet metus.
              </p>
            </RowContainer>
            <p>related products maybe</p>
            <RowContainer>
              <Carousel
                step={context.state.carousel}
                change={context.nextCarousel}
                imgs={[
                  "https://randomuser.me/api/portraits/women/1.jpg",
                  "https://randomuser.me/api/portraits/men/1.jpg",
                  "https://randomuser.me/api/portraits/women/2.jpg",
                  "https://randomuser.me/api/portraits/men/2.jpg"
                ]}
              />
            </RowContainer>
          </MainWrapp>
        )}
      </MyContext.Consumer>
    );
  }
}
