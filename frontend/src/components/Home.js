import React, { Component } from "react"
import styled from "styled-components"
import CarouselHome from "./HomeCarousel"
import { H1a, SubHeaderHighC } from "../styledComponents/StyledComps"

const HomeTag = styled.div`
  background-color: #121315;
  margin: 0;
  padding: 0;
  z-index: -1000;
`
export default class Home extends Component {
  render() {
    return (
      <>
        <H1a>Moda Mexicana</H1a>
        <br />
        <HomeTag>
          <br />
          <br />
          <SubHeaderHighC>
            Descubre las mejores marcas mexicanas.
          </SubHeaderHighC>
          <CarouselHome />
        </HomeTag>
      </>
    )
  }
}
