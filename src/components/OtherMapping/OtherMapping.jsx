import React from "react";
import OtherContainer from "./OtherContainer";
import { Family } from "./Styled";
import sport from "../mock/sports.json";

const OtherMapping = () => {
  return (
    <Family>
      {sport.data.trendingCollections.edges.map((value, key) => (
        <OtherContainer value={value} key={key} />
      ))}
    </Family>
  );
};

export default OtherMapping;
