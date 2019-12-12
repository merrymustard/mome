import React, { Component } from "react";
import { MyContext } from "../context";
import * as Icon from "react-feather";

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
	BtnCarousel
} from "../styledComponents/StyledComps";

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
                    <Icon.ChevronUp size='30'/>
                  </BtnCarousel>
                  <ThumbnaiProduct src="/images/sweat3.png" alt="name" />
                  <ThumbnaiProduct src="/images/sweat1.png" alt="name" />
                  <ThumbnaiProduct src="/images/sweat2.png" alt="name" />
                  <ThumbnaiProduct src="/images/sweat4.png" alt="name" />
                  <ThumbnaiProduct src="/images/sweat5.png" alt="name" />
									<BtnCarousel>
                    <Icon.ChevronDown size='30'/>
                  </BtnCarousel>
                </CarouselHorizontal>

                <img src="/images/sweat3.png" alt="main" />
              </ProductCard>
              <ProducInfo>
                <SubHeaderHighC>Brand Name</SubHeaderHighC>
                <H1a>Product Name</H1a>
                <p className="price-num">$3000</p>
                <div className="button-container">
                  <TemplateBtn>Add to cart</TemplateBtn>
                  <TemplateBtnWhite> Add to wish list></TemplateBtnWhite>
                </div>
                <br />
                <div className="button-container">
                  <TemplateBtnWhite> +</TemplateBtnWhite>

                  <TemplateBtnWhite> -</TemplateBtnWhite>
                </div>

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
          </MainWrapp>
        )}
      </MyContext.Consumer>
    );
  }
}
