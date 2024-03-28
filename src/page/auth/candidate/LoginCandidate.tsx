import Logo from "../../../assets/logo-rikkei2 2.png";
import office from "../../../assets/At the office-amico 1.png";
import { useNavigate } from "react-router-dom";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { LoginCandidateService } from "../../../service/candidateService/LoginCandidate.service";
const LoginCandidate = () => {
  const navigate = useNavigate();

  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    messageError,
    handleSubmit,
  } = LoginCandidateService();

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
            <div id="email" className="flex flex-col">
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
              Đăng nhập
            </button>
          </form>

          <div className="text-center mt-[20px]">
            <p
              className="text-sm font-cabin font-medium cursor-pointer hover:text-red-500"
              onClick={() => navigate("/auth/check-email")}
            >
              Quên mật khẩu?
            </p>
            <p className="text-sm font-cabin font-medium mt-5">
              Bạn không có tài khoản?{" "}
              <span
                className="text-main-0 hover:text-red-500 cursor-pointer"
                onClick={() => navigate("/auth/register-candidate")}
              >
                Tạo 1 tài khoản
              </span>
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="w-[1.45px] h-[641px] bg-gradient-to-r from-[#0A033C] to-[#0A033C] "></div>
        {/* 3 */}
        <div>
          <img src={office} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginCandidate;
