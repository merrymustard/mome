import React, { Component } from "react"
import styled from "styled-components"
import CarouselHome from "./HomeCarousel"

const HomeTag = styled.div`
  background-color: #121315;
  margin: 0;
  padding: 0;
  z-index: -1000;
`
export default class Home extends Component {
  render() {
    return (
      <HomeTag>
        <CarouselHome />
      </HomeTag>
    )
  }
}
