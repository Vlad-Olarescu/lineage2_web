import React from "react";
import { News, Container, Icon } from "./Newsfeed.style";
import {
  FaHouseDamage,
  FaBell,
  FaEnvelope,
  FaRegUserCircle,
} from "react-icons/fa";
import { SearchBar } from "./Newsfeed.style";

export const NewsfeedPage = () => {
  return (
    <News>
      <Container>
        <Icon>
          <FaHouseDamage size="20" />
        </Icon>
        <SearchBar type="text" placeholder="Search ..." />
        <Icon>
          <FaBell size="20" />
        </Icon>
        <Icon>
          <FaEnvelope size="20" />
        </Icon>
        <Icon>
          <FaRegUserCircle size="20" />
        </Icon>
      </Container>
    </News>
  );
};
