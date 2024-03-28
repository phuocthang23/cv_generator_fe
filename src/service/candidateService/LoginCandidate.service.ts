import { useNavigate } from "react-router-dom";
import { useAuthLogic } from "../../utils/authLogic";
import { useState } from "react";
import { loginCandidateApi } from "../../apis/auth/auth";

export const LoginCandidateService = () => {
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
      const response: any = await loginCandidateApi({ email, password });

      if (response) {
        localStorage.setItem("Auth", response.access_token);
        navigate("/");
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
