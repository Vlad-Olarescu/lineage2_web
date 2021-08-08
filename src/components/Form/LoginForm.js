import React, { useEffect, useState } from "react";
import { useSession } from "../hooks";
import { useHistory } from "react-router-dom";
import { api } from "../../api/api";
import { emailRegex } from "../consts/const";
import { Container, Form, Title, Button } from "./Form.style";
import { Input } from "../Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = () => {
  const { loading, loggedIn } = useSession();
  const history = useHistory();

  useEffect(() => {
    !loading && loggedIn && history.push("/");
  }, [loading, loggedIn, history]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
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
    setErrors({
      email: "",
      password: "",
    });

    if (!emailRegex.test(formData.email)) {
      handleFormError("email", "Invalid email address.");
      return;
    }
    if (formData.password.length < 8) {
      handleFormError("password", "Password must be at least 8 characters.");
      return;
    }

    const { data, status } = await api.login(formData.email, formData.password);

    if (status === 201) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("account", JSON.stringify(data.user));
      setTimeout(() => {
        history.push("/");
      }, 100);
    } else {
      toast.error(data);
    }
  };
  return (
    <Container>
      <Form>
        <ToastContainer />
        <Title>LOG IN</Title>
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
        <Button onClick={handleSubmit}>LOG IN</Button>
      </Form>
    </Container>
  );
};
