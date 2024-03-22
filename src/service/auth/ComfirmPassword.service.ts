import { useState } from "react";
import { confirmPasswordApi } from "../../apis/auth/forgetPassword";
import { useNavigate, useParams } from "react-router-dom";

export const ConfirmPasswordService = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [messageError, setMessageError] = useState("");

  const navigate = useNavigate();
  const param = useParams();
  const card_id = param.id;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password === "") {
      setMessageError("Password không đúng");
      return;
    }

    if (password.length < 6) {
      setMessageError("Password phải có ít nhất 6 ký tự");
      return;
    }

    if (password !== confirmPassword) {
      setMessageError("Password không trùng khớp");
      return;
    }

    try {
      await confirmPasswordApi({ password, card_id });
      navigate("/auth");
    } catch (error) {
      console.log(error);
      setMessageError("lỗi không tạo được password");
    }
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    passwordError,
    setPasswordError,
    confirmPasswordError,
    setConfirmPasswordError,
    handleSubmit,
    messageError,
  };
};
