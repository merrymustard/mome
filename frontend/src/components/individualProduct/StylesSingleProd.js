import styled from "styled-components"
import { colors } from "../../styledComponents/StyledComps"

////////// individual produc view
export const ProductCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 60%;
  height: 60%;
  background-color: transparent;
  box-shadow: 0px 20px 34px -10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  img[alt="main"] {
    width: 84%;
    height: 84%;
    border-radius: 4px;
  }
  @media (max-width: 1200px) {
    width: 50%;
    height: 50%;
    flex-direction: column-reverse;
    img[alt="main"] {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`

//////main wrap
export const ProducInfo = styled.div`
  width: 44%;
  text-align: left;
  padding: 4%;
  display: flex;
  flex-direction: column;
  h6{
    color: ${colors.midGray2};
    opacity: 70%;
    padding: 0px;
    margin: 10px 0;
    text-align: left;
  }
  h4{
    margin: 0;
  }
	.button-container{
		display-flex;
		justify: space-between;
	}
  .price-num {
    font-size: 1.4em;
    font-weight: 600;
    color: ${colors.darkBlack};
    opacity: 80%;
    margin-bottom: 20px;

  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
////////// product sizes box
export const SizeContainer = styled.div`
  display: flex;
  flex-direction: start;
  button {
    border: solid 1px ${colors.darkBlack};
    color: ${colors.midGray};
    background-color: transparent;
    padding: 8px 16px;
    font-size: 1.2rem;
    border-radius: 4px;
    margin-right: 10px;
  }
`

////////// add products number box
export const QtytyBtns = styled.div`
  width: 0%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  border: none;
  margin: 20px 0;
  box-sizing: border-box;

  p {
    margin: 0;
    padding: 0 4px;
  }

  .quantity {
    box-sizing: border-box;
    font-size: 1.6rem;
    padding: 0 16px;
    align-text: right;
    border: none;
    box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.3);
  }
`

export const AddSubstractBtn = styled.button`
  height: 40px;
  width: 50px;
  padding: 0 14px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${colors.darkBlack};
  color: white;
  border-radius: 2px;
  box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: ${colors.purple01};
    color: ${colors.darkBlack};
  }
`

export const BtnCarousel = styled.div`
  width: 140%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  &:hover {
    background-color: ${colors.lighGray};
  }
  @media (max-width: 1200px) {
    width: 200%;
    height: 140%;
    margin-top: 5%;
    transform: rotate(-90deg);
    align-items: stretch;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
    margin-top: 5%;
  }
`

export const CarouselHorizontal = styled.div`
  box-sizing: border-box;
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: row;
    align-items: stretch;
  }
`
export const ThumbnaiProduct = styled.img`
  width: 140%;
  margin: 8% 0;
  border-radius: 2px;
  @media (max-width: 1200px) {
    width: 13%;
    height: 100%;
    margin: 2% 1% 0 1%;
  }
  @media (max-width: 768px) {
    height: 80%;
  }
`

export const Pleft = styled.p`
  text-align: left;
`
