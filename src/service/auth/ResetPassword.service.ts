import { useState } from "react";
import { resetPasswordApi } from "../../apis/auth/forgetPassword";

export const resetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Email không hợp lệ");
      return;
    }

    if (email === "") {
      setEmailError("không được để trống");
      return;
    }

    try {
      await resetPasswordApi({ email });
      setMessage(
        "yêu cầu của bạn đã được gửi vào email, mới vào email để xác nhận"
      );
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setEmailError("Không tìm thấy Email");
        return;
      }
    }
  };
  return { email, setEmail, handleSubmit, emailError, message };
};
