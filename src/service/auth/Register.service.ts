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
    userName,
    setUserName,
    passwordError,
    confirmPasswordError,
  } = useAuthLogic(true);

  const [messageError, setMessageError] = useState("");

  const roleId = 1;
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      userName === ""
    ) {
      setMessageError("điền đầy đủ các thông tin không được trống");
    }
    try {
      await RegisterApi({
        email,
        password,
        roleId,
        userName,
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
    userName,
    setUserName,
    passwordError,
    confirmPasswordError,
    messageError,
    handleSubmit,
  };
};
