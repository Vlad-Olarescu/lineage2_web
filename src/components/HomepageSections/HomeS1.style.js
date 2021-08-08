import styled from "styled-components";
import background from "./sec_one.jpg";

export const Container = styled.div`
  min-height: 1024px;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1024px) {
    background-image: none;
    background-color: gray;
    min-height: auto;
  }
`;
export const Welcome = styled.div`
  padding: 30px 50px;
  margin-top: 200px;
  @media (max-width: 1024px) {
    margin-top: 50px;
    padding: 30px 10px;
  }
`;
export const Title = styled.h1`
  color: lightgray;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 30px;
`;
export const Subtitle = styled.h3`
  color: lightgray;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 30px;
`;
export const Button = styled.span`
  color: lightgray;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #d00000;
  }
`;

export const Newsfeed = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  @media (max-width: 1024px) {
    padding: 30px 10px;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: gray;
  }
`;
export const Card = styled.div`
  max-width: 300px;
  max-height: 400px;
  margin: 10px 0;
  cursor: pointer;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: black;
`;
export const Img = styled.img`
  max-width: 100%;
  border-radius: 10px 10px 0 0;
`;
export const Date = styled.p`
  color: lightgray;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
  padding-left: 10px;
`;
export const Text = styled.p`
  color: lightgray;
  font-size: 20px;
  line-height: 36px;
  margin: 10px 0;
  padding-left: 10px;
`;
