import React, { useReducer } from "react";
import {
  BodyLower,
  BodyUpper,
  Container,
  Left,
  Right,
  RightLower,
  RightUpper,
} from "./Style";
import { BsFillGridFill } from "react-icons/bs";
import { VscListUnordered } from "react-icons/vsc";
import { IconContext } from "react-icons";
import Mapping from "../Mapping";
import OtherMapping from "../OtherMapping/OtherMapping";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        showText: !state.showText,
        showTable: false,
      };
    case "DECREMENT":
      return {
        showText: false,
        showTable: !state.showTable,
      };

    default:
      return state;
  }
};
const NavbarPage = () => {
  const [state, ditpatch] = useReducer(reducer, { showText: true });
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <Container>
        <BodyUpper>
          <Left>
            <p>Item 25.156</p>
          </Left>
          <Right>
            <RightUpper>
              <p>sort by</p>
              <input id="select" type="text" placeholder="select" />
              <button id="v">v</button>
            </RightUpper>
            <RightLower>
              <input id="number" type="number" />
              <button
                id="btnNav"
                onClick={() => {
                  ditpatch({ type: "INCREMENT" });
                }}
              >
                <BsFillGridFill />
              </button>
              <button
                id="btnNav"
                onClick={() => {
                  ditpatch({ type: "DECREMENT" });
                }}
              >
                <VscListUnordered />
              </button>
            </RightLower>
          </Right>
        </BodyUpper>
        <BodyLower>
          {state.showTable && <OtherMapping />}
          {state.showText && <Mapping />}
        </BodyLower>
      </Container>
    </IconContext.Provider>
  );
};

export default NavbarPage;
