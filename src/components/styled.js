import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Family = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  gap: 5%;
  padding: 20px;
`;
export const Child = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 25px;
  gap: 20px;
  border: none;
  height: 400px;
  width: 300px;
  box-shadow: 0 0 10px #000;
  #price {
    color: #58c8f1;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10%;
  #btn {
    border: 1px solid #58c8f1;
    background-color: white;
    border-radius: 12px;
    width: 150px;
    height: 40px;
    cursor: pointer;
  }
  #btn:hover {
    background-color: grey;
  }
`;
export const Wallpaper = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 12px;
`;
