import React from "react";
import { Link } from "react-router-dom";
import logo from "./nc_logo.png";
import {
  Container,
  Left,
  NCLogo,
  Games,
  Button,
  Dropdown,
  DropdownImg,
  Right,
  Links,
} from "./NCHeader.style";

export const NCHeader = () => {
  return (
    <Container>
      <Left>
        <Link to="/">
          <NCLogo src={logo} />
        </Link>
        <Games>
          <Button>Games</Button>
          <Dropdown>
            <Link>
              <DropdownImg src="https://source.unsplash.com/random" />
            </Link>
            <Link>
              <DropdownImg src="https://source.unsplash.com/random" />
            </Link>
            <Link>
              <DropdownImg src="https://source.unsplash.com/random" />
            </Link>
            <Link>
              <DropdownImg src="https://source.unsplash.com/random" />
            </Link>
            <Link>
              <DropdownImg src="https://source.unsplash.com/random" />
            </Link>
            <Link>
              <DropdownImg src="https://source.unsplash.com/random" />
            </Link>
          </Dropdown>
        </Games>
      </Left>
      <Right>
        <Links>
          <Link to="/register">Create Account</Link>
        </Links>
        <Links>
          <Link to="/login">Log In</Link>
        </Links>
        <Links>
          <Link to="#">Support</Link>
        </Links>
      </Right>
    </Container>
  );
};
