import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BodyUpper = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid black;
  padding: 20px;
`;
export const BodyLower = styled.div``;
export const Left = styled.div`
  display: flex;
  flex: 1;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;
export const RightUpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  #select {
    margin-left: 20px;
    width: 250px;
    height: 40px;
    border: 1px solid lightgrey;
    padding: 10px;
    background-color: lightgrey;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
  #v {
    width: 40px;
    height: 40px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;
    border: 1px solid lightgrey;
  }
`;
export const RightLower = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  #number {
    width: 80px;
    height: 40px;
    border: 1px solid lightgrey;
    border-radius: 8px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  #btnNav {
  }
`;
