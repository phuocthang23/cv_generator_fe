import { useNavigate } from "react-router-dom";
import { useAuthLogic } from "../../utils/authLogic";
import { RegisterApi } from "../../apis/auth/auth";
import { useState } from "react";

export const registerService = () => {
  const {
    email,
    setEmail,
    password,
    confirmPassword,
    setConfirmPassword,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    confirmPasswordError,
  } = useAuthLogic(true);

  const [messageError, setMessageError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      name === "" ||
      description === "" ||
      size === ""
    ) {
      setMessageError("điền đầy đủ các thông tin không được trống");
    }

    try {
      await RegisterApi({
        email,
        password,
        name,
        description,
        size,
      });
      navigate("/auth");
    } catch (error) {
      setEmailError("Email đã được tồn tại");
    }
  };

  return {
    email,
    setEmail,
    password,
    confirmPassword,
    setConfirmPassword,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    confirmPasswordError,
    messageError,
    handleSubmit,
    name,
    setName,
    description,
    setDescription,
    size,
    setSize,
  };
};
