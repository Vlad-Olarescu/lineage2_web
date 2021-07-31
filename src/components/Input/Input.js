import React from "react";
import { Container, Label, Error, InputElement } from "./Input.style";

export const Input = ({
  name,
  label,
  error,
  value,
  placeholder,
  handleOnChange,
  type,
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputElement
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(name, e.target.value)}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
