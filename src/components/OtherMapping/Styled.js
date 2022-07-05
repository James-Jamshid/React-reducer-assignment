import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 250px;
  border-radius: 16px;
  box-shadow: 0 0 5px #000;
`;

export const Family = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;
export const ContainerLeft = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
`;
export const ContainerRight = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  #price {
    color: #58c8f1;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15%;

  #btn {
    border: 1px solid #58c8f1;
    background-color: white;
    border-radius: 12px;
    width: 450px;
    height: 40px;
    cursor: pointer;
  }
  #btn:hover {
    background-color: grey;
  }
`;
export const Wallpaper = styled.img`
  width: 70%;
  height: 200px;
  border-radius: 12px;
`;
