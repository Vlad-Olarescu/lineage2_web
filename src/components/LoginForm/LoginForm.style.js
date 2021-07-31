import styled from "styled-components";
import background from "./log_in.jpg";

export const Container = styled.div`
  height: calc(100vh - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const Form = styled.div`
  width: 100%;
  max-width: 300px;
`;
export const Title = styled.h1`
  color: lightgray;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
`;
export const Button = styled.div``;
