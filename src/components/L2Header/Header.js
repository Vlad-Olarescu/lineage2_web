import React from "react";
import { Link } from "react-router-dom";
import logo from "./l2_logo.png";
import {
  Container,
  Left,
  Logo,
  LinksParent,
  LinksChildren,
  Dropdown,
  Right,
  Links,
  HamburgerIcon,
  HamburgerLine,
} from "./Header.style";

export const Header = () => {
  return (
    <Container>
      <Left>
        <HamburgerIcon>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerIcon>
        <Link to="#">
          <Logo src={logo} />
        </Link>
        <LinksParent>
          <LinksChildren>
            <Links>Game</Links>
            <Dropdown>
              <Links>About the Game</Links>
              <Links>About Lineage ][ Aden</Links>
              <Links>About Lineage ][ Classic</Links>
              <Links>Races n' Classes</Links>
              <Links>Download Game</Links>
            </Dropdown>
          </LinksChildren>
          <LinksChildren>
            <Links>News</Links>
          </LinksChildren>
          <LinksChildren>
            <Links>Forums</Links>
          </LinksChildren>
          <LinksChildren>
            <Links>Support</Links>
          </LinksChildren>
          <LinksChildren>
            <Links>Shop</Links>
            <Dropdown>
              <Links>NCoin</Links>
              <Links>Launch Packs</Links>
              <Links>Prestige Pack</Links>
              <Links>Server Transfer</Links>
            </Dropdown>
          </LinksChildren>
          <LinksChildren>
            <Links>Lineage II Aden</Links>
          </LinksChildren>
        </LinksParent>
      </Left>
      <Right>
        <LinksChildren>
          <Link to="/login">
            <Links>LOG IN</Links>
          </Link>
        </LinksChildren>
        <LinksChildren>
          <Link to="/register">
            <Links>PLAY FREE NOW</Links>
          </Link>
        </LinksChildren>
      </Right>
    </Container>
  );
};
