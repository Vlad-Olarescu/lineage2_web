import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background-color: black;
  position: relative;
  display: flex;
  z-index: 5;
`;
export const LinksParent = styled.ul`
  height: 100%;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Left = styled.div`
  height: 100%;
  position: relative;
  left: 50px;
  display: flex;
  @media (max-width: 768px) {
    left: 10px;
    &:hover {
      ${LinksParent} {
        display: block;
        position: absolute;
        top: 100%;
        left: -10px;
        width: 100vw;
        background-color: black;
        z-index: 12;
      }
    }
  }
`;
export const Logo = styled.img`
  display: block;
  height: 100%;
  margin-right: 15px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  display: none;
  width: 220px;
  background-color: #d00000;
`;
export const LinksChildren = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    background-color: black;
  }
  &:hover {
    background-color: #d00000;
    cursor: pointer;
  }
  &:hover {
    ${Dropdown} {
      display: block;
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 13;
    }
  }
`;
export const Right = styled.div`
  height: 100%;
  position: absolute;
  right: 50px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    right: 20px;
  }
`;
export const Links = styled.span`
  font-size: 16px;
  line-height: 24x;
  color: lightgray;
  margin: 10px 15px;
  cursor: pointer;
  display: block;
  width: 100%;

  @media (max-width: 1024px) {
    margin: 10px 15px;
  }
`;

// Hamburger Icon
export const HamburgerIcon = styled.div`
  width: 60px;
  height: 100%;
  padding: 7px 5px;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
export const HamburgerLine = styled.div`
  width: 50px;
  border: 4px solid lightgray;
  border-radius: 4px;
`;
