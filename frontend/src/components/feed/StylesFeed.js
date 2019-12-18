import styled from "styled-components"
import { colors } from "../../styledComponents/StyledComps"

export const FeedWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const FitlerCard = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  flex-direction: column;
  background-color: ${colors.midGray2};
  border-radius: 4px;
  margin-right: 30px;
  color: white;
  text-align: left;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`

////////// filter
export const FeedContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
  flex-wrap: wrap;
  text-align: left;
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
