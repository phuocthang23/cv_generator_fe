import { useNavigate } from "react-router-dom";
import { useAuthLogic } from "../../utils/authLogic";
import { RegisterApi } from "../../apis/auth/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
  const [nameError, setNameError] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [sizeError, setSizeError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const sizeNumber = Number(size);
    if (name.length < 3) {
      setNameError("Tên phải có nhất 3 ký tự");
    } else {
      setNameError("");
    }

    if (isNaN(sizeNumber)) {
      setSizeError("quy mô cty phải là một số");
    } else {
      setSizeError("");
    }
  }, [name, size]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res: any = await RegisterApi({
        email,
        password,
        name,
        description,
        size,
      });
      if (res?.success === true) {
        toast.success("Bạn đăng thành công !", {
          autoClose: 2000,
          onClose: () => navigate("/auth"),
        });
      }
    } catch (error: any) {
      if (error?.response?.status === 409) {
        setEmailError("Tên email đã được sử dụng");
        return;
      }
      setMessageError("lỗi không tạo được account");
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
    nameError,
    sizeError,
  };
};
