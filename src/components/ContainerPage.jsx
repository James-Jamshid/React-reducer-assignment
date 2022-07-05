import React from "react";
import data from "./mock/sports.json";
import { Child, Container, Wallpaper, Wrapper } from "./styled";
console.log("data:", data);

const ContainerPage = ({ value }) => {
  return (
    <Container>
      <Child>
        <Wallpaper src={value.node.banner} alt="something is error" />

        <p id="name"> {value.node.name}</p>
        <p id="price">by {value.node.price} </p>
        <Wrapper>
          <button id="btn">Order</button>
          <button id="btn">Compare</button>
        </Wrapper>
      </Child>
    </Container>
  );
};

export default ContainerPage;
