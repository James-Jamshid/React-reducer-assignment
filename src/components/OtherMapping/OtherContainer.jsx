import React from "react";
import {
  Buttons,
  Container,
  ContainerLeft,
  ContainerRight,
  Wallpaper,
} from "./Styled";
// import burger from "../mock/sports.json";

const OtherContainer = ({ value }) => {
  return (
    <Container>
      <ContainerLeft>
        <Wallpaper src={value.node.banner} alt="something is error" />
      </ContainerLeft>

      <ContainerRight>
        <p id="name"> {value.node.name}</p>
        <p id="price">by {value.node.price} </p>
        <Buttons>
          <button id="btn">Order</button>
          <button id="btn">Compare</button>
        </Buttons>
      </ContainerRight>
    </Container>
  );
};

export default OtherContainer;
