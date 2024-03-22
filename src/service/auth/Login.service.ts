import { useNavigate } from "react-router-dom";
import { useAuthLogic } from "../../utils/authLogic";
import { loginApi } from "../../apis/auth/auth";
import { useState } from "react";

export const loginService = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
  } = useAuthLogic(false);

  const [messageError, setMessageError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setMessageError("");

    try {
      const response: any = await loginApi({ email, password });

      if (response) {
        localStorage.setItem("Auth", response.access_token);

        if (response.data.role === "admin") {
          navigate("/admin");
        } else if (response.data.role === "staff") {
          navigate("/");
        } else {
          navigate("/business");
        }
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setEmailError("Email hoặc password không đúng");
        setPasswordError("Email hoặc password không đúng");
      } else {
        if (email === "" || password === "") {
          setMessageError("Email hoặc password không được trống");
        }
      }
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    messageError,
    handleSubmit,
  };
};
