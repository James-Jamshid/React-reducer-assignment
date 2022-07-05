import React from "react";
import ContainerPage from "./ContainerPage";
import sport from "./mock/sports.json";
import { Family } from "./styled";
console.log("sport:", sport);

const Mapping = () => {
  return (
    <Family>
      {sport.data.trendingCollections.edges.map((value, key) => (
        <ContainerPage value={value} key={key} />
      ))}
    </Family>
  );
};

export default Mapping;
