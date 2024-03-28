import { useNavigate } from "react-router-dom";
import { useAuthLogic } from "../../utils/authLogic";
import { useState } from "react";
import { RegisterCandidateApi } from "../../apis/auth/auth";
import { formatDay } from "../../utils/convertDay";

export const registerCandidateService = () => {
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
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const navigate = useNavigate();

  const dob = formatDay(dateTime);
  const name = userName;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      userName === "" ||
      phone === 0 ||
      address === ""
    ) {
      setMessageError("điền đầy đủ các thông tin không được trống");
    }
    try {
      await RegisterCandidateApi({
        email,
        password,
        name,
        gender,
        phone,
        address,
        dob,
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
    phone,
    address,
    gender,
    dateTime,
    handleChange,
    setPhone,
    setAddress,
    setGender,
    setDateTime,
  };
};
