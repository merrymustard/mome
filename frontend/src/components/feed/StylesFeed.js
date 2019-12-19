import styled from "styled-components"
import { colors } from "../../styledComponents/StyledComps"

export const FeedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`

export const FitlerCard = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  flex-direction: column;
  background-color: ${colors.midGray2};
  border-radius: 4px;
  color: white;
  text-align: left;
  @media (max-width: 760px) {
    margin-right: 0;
    visibility: hidden;
  }
`

////////// filter
export const FeedContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
  flex-wrap: wrap;
  text-align: left;
  width: 70%;
`

///////// thumbnails products
export const CardProdWrap = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: auto;
  color: black;
  border-radius: 4px;
  padding: 0;
  margin: 0 18px;
  box-sizing: border-box;
  margin-bottom: 40px;

  small {
    margin: 20px 0;
  }
  a {
    color: ${colors.purple01};
  }
`

////////// IMAGE CONTAINER WITH HEART
export const Prodimg = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.24);
  margin-bottom: 20px;
  height: 265px;
  z-index: -100;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.36);
  }
  img {
    width: 100%;
    position: relative;
    border-radius: 4px;
  }
`

export const FilterSections = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
  label {
    width: 50%;
  }
  input {
    color: white;
  }
  .red-circle {
    background-color: #aa1e31;
  }
  .blu-circle {
    background-color: #18a8f0;
  }
  .yellow-circle {
    background-color: #f7ba08;
  }
  .green-circle {
    background-color: #4dbb16;
  }
  .white-circle {
    background-color: #fff;
  }
  .purple-circle {
    background-color: purple;
  }
  div {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`

export const FilterSectionsVertical = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding: 0;
    margin: 0;
  }
  input {
    color: white;
  }
`
