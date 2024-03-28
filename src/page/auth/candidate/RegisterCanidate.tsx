import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo-rikkei2 2.png";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { registerCandidateService } from "../../../service/authCandidate/RegisterCadindate.service";
import { formatDay } from "../../../utils/convertDay";

const RegisterCandidate = () => {
  const navigate = useNavigate();

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
    messageError,
    handleSubmit,
    phone,
    address,
    gender,
    dateTime,
    handleChange,
    setPhone,
    setAddress,
    setDateTime,
  } = registerCandidateService();

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
              <label htmlFor="" className="mb-4">
                Họ tên
              </label>
              <input
                type="text"
                placeholder="abcd"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className={`h-16 rounded-[5px] border ${
                  emailError && email !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                }`}
              />
            </div>
            <div id="email" className="flex flex-col mt-9">
              <label htmlFor="" className="mb-4">
                Email
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                value={email}
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
            <div id="password" className="flex flex-col mt-9">
              <label htmlFor="" className="mb-4">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={password}
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
            <div id="repassword" className="flex flex-col mt-9">
              <label htmlFor="" className="mb-4">
                Confirm password
              </label>
              <input
                type="password"
                placeholder="********"
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
                onClick={() => navigate("/auth/login-candidate")}
              >
                Đăng nhập tài khoản
              </span>
            </p>
          </div>
        </div>
        <div className="w-[1.45px] h-[900px] bg-gradient-to-r from-[#0A033C] to-[#0A033C] "></div>
        <div className="w-[486px] h-[106px] ml-[40px]">
          <p className="text-3xxl font-cabin font-bold">
            Cùng Rikkei Education xây dựng hồ sơ nổi bật và nhận được các cơ hội
            sự nghiệp lý tưởng
          </p>
          <form onSubmit={handleSubmit} className="mt-[50px]">
            <div id="name" className="flex flex-col">
              <label htmlFor="" className="mb-4">
                Ngày sinh
              </label>
              <input
                type="date"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className={`h-16 rounded-[5px] border ${
                  emailError && email !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                }`}
              />
            </div>
            <div id="email" className="flex flex-col mt-9">
              <label htmlFor="" className="mb-4">
                Địa chỉ
              </label>
              <input
                type="text"
                placeholder=""
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={`h-16 rounded-[5px] border ${
                  emailError && email !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                }`}
              />
              {/* {emailError && email !== "" && (
                <p className="text-red-500">{emailError}</p>
              )} */}
            </div>
            <div id="password" className="flex flex-col mt-9">
              <label htmlFor="" className="mb-4">
                Số điện thoại
              </label>
              <input
                type="tel"
                placeholder="090 123 4567"
                value={phone}
                onChange={(e) => setPhone(parseInt(e.target.value))}
                className={`h-16 rounded-[5px] border ${
                  passwordError && password !== ""
                    ? "border-red-500"
                    : "border-[#DEDDE4]"
                } px-4`}
              />
              {/* {passwordError && password !== "" && (
                <p className="text-red-500">{passwordError}</p>
              )} */}
            </div>
            <div id="repassword" className="flex flex-col mt-9">
              <label htmlFor="" className="mb-4">
                Giới tính
              </label>
              <select
                value={gender || 0}
                onChange={handleChange}
                className=" border text-gray-900 text-base min-w-[73px] py-[6px]"
              >
                <option value={0}>Nam</option>
                <option value={1}>Nữ</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCandidate;
