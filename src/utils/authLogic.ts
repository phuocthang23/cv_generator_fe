import { useEffect, useState } from "react";
import { User } from "../types/auth";

export const useAuthLogic = (isRegister: boolean) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Email không hợp lệ");
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
    } else {
      setPasswordError("");
    }

    if (isRegister) {
      if (confirmPassword !== password) {
        setConfirmPasswordError("Mật khẩu không khớp");
      } else {
        setConfirmPasswordError("");
      }
    }
  }, [email, password, confirmPassword, name, isRegister]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    userName,
    setUserName,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    confirmPasswordError,
  };
};
