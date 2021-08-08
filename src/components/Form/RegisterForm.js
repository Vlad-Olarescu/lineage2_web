import React, { useEffect, useState } from "react";
import { useSession } from "../hooks";
import { useHistory } from "react-router-dom";
import { api } from "../../api/api";
import { emailRegex } from "../consts/const";
import { Container, Form, Title, Button } from "./Form.style";
import { Input } from "../Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    repeatPassword: "",
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
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      repeatPassword: "",
    });

    const { first_name, last_name, email, password, repeatPassword } = formData;

    if (first_name.length < 3) {
      handleFormError("first_name", "First name must be at least 3 charcaters");
      return;
    }

    if (last_name.length < 3) {
      handleFormError("last_name", "Last name must be at least 3 characters");
      return;
    }

    if (!emailRegex.test(email)) {
      handleFormError("email", "Please enter a vail email address");
      return;
    }

    if (password !== repeatPassword) {
      handleFormError("repeatPassword", "Passwords do not match");
      return;
    }

    if (password.length < 8) {
      handleFormError(
        "repeatPassword",
        "Password must be at least 8 characters"
      );
      return;
    }

    async function submitRegisterForm() {
      const { data, status } = await api.register(
        first_name,
        last_name,
        email,
        password
      );

      if (status === 201) {
        toast.success("Account created successfully. You can now log in.");
        setTimeout(() => {
          history.push("/login");
        }, 3000);
      } else {
        toast.error("Something went wrong. Try again later." + data);
      }
    }
    try {
      for (const key in errors) {
        if (errors[key] !== "") {
          throw new Error("Can not submit form");
        }
      }
      submitRegisterForm();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Form>
        <ToastContainer />
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
          label="Password"
          placeholder="Repeat password"
          type="password"
          error={errors.repeatPassword}
          value={formData.repeatPassword}
          handleOnChange={handleInputValueChange}
          name="repeatPassword"
        />
        <Button onClick={handleSubmit}>REGISTER</Button>
      </Form>
    </Container>
  );
};
