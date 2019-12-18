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
  box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  img[alt="main"] {
    width: 84%;
    height: 84%;
  }
  @media (max-width: 1200px) {
    width: 50%;
    height: 100%;
    flex-direction: column-reverse;
    img[alt="main"] {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 460px;
  }
`

//////main wrap
export const ProducInfo = styled.div`
  width: 44%;
  text-align: left;
  padding: 4%;
  display: flex;
  flex-direction: column;
	.button-container{
		display-flex;
		justify: space-between;
	}
  .price-num {
    font-size: 1.4em;
    font-weight: 600;
    color: ${colors.darkBlack};
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
    :hover {
      background-color: ${colors.purple01};
      color: white;
      border: solid 1px ${colors.purple01};
    }
    :activated {
      background-color: ${colors.purple01};
      color: white;
      border: solid 1px ${colors.purple01};
    }
    :selected {
      background-color: ${colors.darkBlack};
    }
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
