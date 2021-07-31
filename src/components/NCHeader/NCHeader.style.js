import styled from "styled-components";

export const Container = styled.div`
  height: 30px;
  background-color: black;
  display: flex;
  position: relative;
`;
export const Left = styled.div`
  display: flex;
  position: absolute;
  left: 50px;
  @media (max-width: 768px) {
    left: 10px;
  }
`;
export const NCLogo = styled.img`
  display: block;
  height: 30px;
`;
export const Dropdown = styled.div`
  display: none;
`;
export const Games = styled.div`
  margin: 0 30px;
  position: relative;
  &:hover {
    ${Dropdown} {
      display: flex;
      position: absolute;
      left: -110px;
      justify-content: space-between;
      padding: 30px 50px;
      width: 100vw;
      background-color: black;
    }
  }
  @media (max-width: 1024px) {
    &:hover {
      ${Dropdown} {
        display: flex;
        position: absolute;
        flex-wrap: wrap;
        padding: 20px 50px;
      }
    }
  }
  @media (max-width: 768px) {
    margin: 0 10px;
    &:hover {
      ${Dropdown} {
        left: -50px;
        justify-content: center;
      }
    }
  }
`;
export const Button = styled.span`
  color: lightgray;
  font-size: 16px;
  line-height: 30px;
  cursor: pointer;
`;

export const DropdownImg = styled.img`
  height: 150px;
  width: 200px;
  border-radius: 10px;
  @media (max-width: 1024px) {
    margin: 10px 10px;
  }
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 50px;
  @media (max-width: 768px) {
    right: 10px;
  }
`;
export const Links = styled.div`
  color: lightgray;
  font-size: 16px;
  line-height: 30px;
  margin-left: 30px;
  &:hover {
    color: lightblue;
  }
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;
