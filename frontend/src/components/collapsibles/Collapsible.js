import React from "react";
import styled from "styled-components";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";

const StyledCollapsible = styled.section`
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
  display: grid;
  grid-template-rows: auto 1fr auto;
  /* esto es la magia */
  z-index: 200;
  transform: translateX(100%);
  transition: all 0.3s;
  ${props => props.open && `transform: translateX(0);`};
`;
const StyledItem = styled.div``;

const RenderItem = (item, route) => {
  return (
    <StyleLink to={item}>
      <StyledItem>{item}</StyledItem>
    </StyleLink>
  );
};

const StyleLink = styled(Link)`
  color: red;
`;

const Item = item => {
  const arr = [];
  for (let key in item) {
    if (Object.keys(item[key]).length !== 0) {
      for (let key2 in item[key]) {
        arr.push(RenderItem(key2));
        console.log(item[key]);
      }
    }
  }
  return <StyledItem>{arr}</StyledItem>;
};

export default function Collapsible({ items, open }) {
  return (
    <MyContext.Consumer>
      {context => (
        <StyledCollapsible open={open}>
          <button onClick={context.toggleMenu}>X</button>
          {items.map((item, idx) => (
            <Item key={idx} {...item} />
          ))}
        </StyledCollapsible>
      )}
    </MyContext.Consumer>
  );
}
// export default Collapsible;

// export default function NavBar() {
//   return (
//     <MyContext.Consumer>
//       {context => (
//         <NavMain>
//           <Collapsible
//             items={[
//               {
//                 title: "a",
//                 body: "asdf"
//               }
//             ]}
//             open={context.open}
//           />
//           <h1 className="logo">MoMe</h1>
//           <div className="main-nav-icons">
//             <Icon.Heart size="24" color="white" />
//             <BtnTransparent onClick={context.switchOpen}>
//               <Icon.User size="24" color="white" />
//             </BtnTransparent>

//             <Icon.ShoppingCart size="24" color="white" />
//           </div>
//         </NavMain>
//       )}
//     </MyContext.Consumer>
//   );
// }
