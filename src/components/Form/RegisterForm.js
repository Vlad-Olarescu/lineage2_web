import React, { useEffect, useState } from "react";
import { useSession } from "../hooks";
import { useHistory } from "react-router-dom";
import { api } from "../../api/api";
import { emailRegex } from "../consts/const";
import { Container, Form, Title, Button } from "./Form.style";
import { Input } from "../Input";

export const RegisterForm = () => {
  const { loading, loggedIn } = useSession();
  const history = useHistory();

  useEffect(() => {
    !loading && loggedIn && history.push("/");
  }, [loading, loggedIn, history]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleInputValueChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleFormError = (key, value) => {
    setErrors((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(formData);

    if (formData.first_name.length < 3) {
      handleFormError("first_name", "Username must be at least 3 characters.");
      return;
    }
    if (formData.last_name.length < 3) {
      handleFormError(
        "last_name",
        "Player name must be at least 3 characters."
      );
      return;
    }
    if (!emailRegex.test(formData.email)) {
      handleFormError("email", "Invalid email address.");
      return;
    }
    if (formData.password.length < 8) {
      handleFormError("password", "Password must be at least 8 characters.");
      return;
    }

    const { data, status } = await api.register(
      formData.first_name,
      formData.last_name,
      formData.email,
      formData.password
    );

    if (status === 201 && data.id !== undefined) {
      setTimeout(() => {
        history.push("/login");
      }, 100);
    } else {
      console.warn("ERROR: ", data);
    }
  };

  return (
    <Container>
      <Form>
        <Title>REGISTER</Title>
        <Input
          label="Username"
          placeholder="Username"
          type="text"
          error={errors.first_name}
          value={formData.first_name}
          handleOnChange={handleInputValueChange}
          name="first_name"
        />
        <Input
          label="Player Name"
          placeholder="Player Name"
          type="text"
          error={errors.last_name}
          value={formData.last_name}
          handleOnChange={handleInputValueChange}
          name="last_name"
        />
        <Input
          label="Email"
          placeholder="Email address"
          type="email"
          error={errors.email}
          value={formData.email}
          handleOnChange={handleInputValueChange}
          name="email"
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          error={errors.password}
          value={formData.password}
          handleOnChange={handleInputValueChange}
          name="password"
        />
        <Input
          label="Repeat password"
          placeholder="Password"
          type="password"
          error={errors.password}
          value={formData.password}
          handleOnChange={handleInputValueChange}
          name="password"
        />
        <Button onClick={handleSubmit}>REGISTER</Button>
      </Form>
    </Container>
  );
};
