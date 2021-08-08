import React from "react";
import post1 from "./post1.jpg";
import post2 from "./post2.jpg";
import post3 from "./post3.jpg";
import post4 from "./post4.jpg";
import {
  Container,
  Welcome,
  Title,
  Subtitle,
  Button,
  Newsfeed,
  Card,
  Img,
  Date,
  Text,
} from "./HomeS1.style";

export const Home1 = () => {
  return (
    <Container>
      <Welcome>
        <Title>Lineage ][ Aden is Coming</Title>
        <Subtitle>
          Get ready for your new adventure with a Launch Pack, available for a
          limited time only!
        </Subtitle>
        <Button>LEARN MORE</Button>
      </Welcome>
      <Newsfeed>
        <Card>
          <Img src={post1} />
          <Date>7/28/2021 | General</Date>
          <Text>Take a closer look at the new Pet System!</Text>
        </Card>
        <Card>
          <Img src={post2} />
          <Date>7/26/2021 | General</Date>
          <Text>
            Enter for a chance to win a Deluxe Pack for Lineage ][ Aden!
          </Text>
        </Card>
        <Card>
          <Img src={post3} />
          <Date>7/22/2021 | General</Date>
          <Text>Take a closer look at the new Sylph Storm Blaster!</Text>
        </Card>
        <Card>
          <Img src={post4} />
          <Date>7/22/2021 | General</Date>
          <Text>Take a closer look at the new Death Knight class!</Text>
        </Card>
      </Newsfeed>
    </Container>
  );
};
