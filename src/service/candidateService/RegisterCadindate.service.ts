import { useNavigate } from "react-router-dom";
import { useAuthLogic } from "../../utils/authLogic";
import { useEffect, useState } from "react";
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
  const [phone, setPhone] = useState<any>();
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState<any>(0);
  const [dateTime, setDateTime] = useState("");
  const [nameErr, setNameErr] = useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const navigate = useNavigate();

  const dob = formatDay(dateTime);
  const name = userName;

  useEffect(() => {
    if (userName.length < 3 || userName.length > 50) {
      setNameErr("Tên đăng nhập phải có 3 đúng 50 ký tự");
    } else {
      setNameErr("");
    }
  }, [userName]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      userName === "" ||
      phone === 0 ||
      address === "" ||
      dateTime === ""
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
      navigate("/auth/login-candidate");
    } catch (error: any) {
      if (error?.response?.status === 409) {
        setEmailError("Tên email đã được sử dụng");
        return;
      }
      setMessageError("lỗi không tạo được account");
    }
  };

  const handlePhoneChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
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
    nameErr,
    handlePhoneChange,
  };
};
