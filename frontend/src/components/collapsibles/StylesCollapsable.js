import styled from "styled-components"
import { colors } from "../../styledComponents/StyledComps"

////////// x button to close the side menu
export const CloseBtn = styled.button`
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
    background-color: ${colors.accent};
  }
`
////////// profile info slider
export const SlideMenuProf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
////////// main container side menu
export const StyledCollapsible = styled.section`
  z-index: 100;
  padding: 20px;
  position: relative;
  background: white;
  ${"" /* position: fixed; */}
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  min-width: 400px;
  bottom: 0;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  ${"" /* grid-template-rows: auto 1fr auto; */}
  /* esto es la magia */
  z-index: 200;
  transform: translateX(100%);
  transition: all 0.3s;
  ${props => props.open && `transform: translateX(0);`};
  h2 {
    margin: -38px 0 0 0;
    font-weight: 300;
    z-index: -10;
  }
`
////////// cart side nav
export const SlideCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
