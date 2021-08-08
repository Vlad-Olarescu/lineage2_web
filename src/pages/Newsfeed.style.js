import styled from "styled-components";

export const News = styled.div`
  height: 100vh;
  background-image: url("https://source.unsplash.com/random");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;
export const SearchBar = styled.input`
  display: block;
  width: 100%;
  max-width: 800px;
  border: 1px solid lightgray;
  font-size: 16px;
  line-height: 24px;
  padding: 7px 24px;
  border-radius: 20px;
`;
