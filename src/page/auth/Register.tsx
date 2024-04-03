import { useNavigate } from "react-router-dom";
import Investment from "../../assets/Investment data-rafiki 1.png";
import Logo from "../../assets/logo-rikkei2 2.png";
import { registerService } from "../../service/auth/Register.service";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();

  const {
    email,
    setEmail,
    password,
    confirmPassword,
    setConfirmPassword,
    setPassword,
    emailError,
    name,
    setName,
    description,
    setDescription,
    size,
    setSize,
    passwordError,
    confirmPasswordError,
    messageError,
    nameError,
    sizeError,
    handleSubmit,
  } = registerService();

  return (
    <div className="px-8 mb-8 min-w-[1440px] mx-auto">
      <div>
        <img src={Logo} alt="" className="px-16 mt-[53px]" />
      </div>
      <div className="mt-[100px] flex justify-between mb-28 ">
        <div className="w-[486px] h-[106px] ml-[62px]">
          <p className="text-3xxl font-cabin font-bold">
            Cùng Rikkei Education xây dựng hồ sơ nổi bật và nhận được các cơ hội
            sự nghiệp lý tưởng
          </p>
          <form onSubmit={handleSubmit} className="mt-[50px]">
            <div id="name" className="flex flex-col">
              <label htmlFor="" className="mb-2 mx-4">
                Tên công ty
              </label>
              <input
                type="text"
                placeholder="abcd"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className={`h-16 rounded-[5px] border ${
                  nameError && name !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                }`}
              />
              {nameError && name !== "" && (
                <p className="text-red-500">{nameError}</p>
              )}
            </div>
            <div id="size" className="flex flex-col mt-4">
              <label htmlFor="" className="mb-2 mx-4">
                Quy mô nhân sự
              </label>
              <input
                type="text"
                placeholder="abcd"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
                className={`h-16 rounded-[5px] border ${
                  sizeError && size !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                }`}
              />
              {sizeError && size !== "" && (
                <p className="text-red-500">{sizeError}</p>
              )}
            </div>
            <div id="email" className="flex flex-col mt-4">
              <label htmlFor="" className="mb-2 mx-4">
                Email
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className={`h-16 rounded-[5px] border ${
                  emailError && email !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                }`}
              />
              {emailError && email !== "" && (
                <p className="text-red-500">{emailError}</p>
              )}
            </div>
            <div id="description" className="flex flex-col mt-4">
              <label htmlFor="" className="mb-2 mx-4">
                Mô tả công ty
              </label>
              <input
                type="text"
                placeholder="abcd"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                className={`h-16 rounded-[5px] border ${
                  emailError && email !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                }`}
              />
            </div>
            <div id="password" className="flex flex-col mt-4">
              <label htmlFor="" className="mb-2 mx-4">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className={`h-16 rounded-[5px] border ${
                  passwordError && password !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                }`}
              />
              {passwordError && password !== "" && (
                <p className="text-red-500">{passwordError}</p>
              )}
            </div>
            <div id="repassword" className="flex flex-col mt-4">
              <label htmlFor="" className="mb-2 mx-4">
                Confirm password
              </label>
              <input
                type="password"
                placeholder="********"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`h-16 rounded-[5px] border ${
                  confirmPasswordError && confirmPassword !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                }`}
              />
              {confirmPasswordError && confirmPassword !== "" && (
                <p className="text-red-500">{confirmPasswordError}</p>
              )}
            </div>

            {messageError && (
              <Alert
                color="failure"
                icon={HiInformationCircle}
                className="mt-4"
              >
                <span className="font-medium">{messageError}</span>.
              </Alert>
            )}

            <button
              type="submit"
              className="bg-main-0 w-full mt-[37px] py-[13px] font-cabin font-medium text-white text-center text-base rounded-[5px]"
            >
              Đăng Ký
            </button>
          </form>

          <div className="text-center mt-[20px]">
            <p className="text-sm font-cabin font-medium mt-5">
              bạn đã có tài khoản?{" "}
              <span
                className="text-main-0 hover:text-red-500 cursor-pointer"
                onClick={() => navigate("/auth")}
              >
                Đăng nhập tài khoản
              </span>
            </p>
          </div>
        </div>
        <div className="w-[1.45px] h-[900px] bg-gradient-to-r from-[#0A033C] to-[#0A033C] "></div>
        <div>
          <img src={Investment} alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
