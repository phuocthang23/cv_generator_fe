import Logo from "../../../assets/logo-rikkei2 2.png";
import Investment from "../../../assets/Investment data-rafiki 1.png";
import { resetPassword } from "../../../service/auth/ResetPassword.service";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
const ForgetPassword = () => {
  const { email, setEmail, handleSubmit, emailError, message } =
    resetPassword();
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
              {message ? (
                <Alert color="info" className="mt-4">
                  <span className="font-medium ">{message}</span>
                </Alert>
              ) : (
                emailError && (
                  <Alert
                    color="failure"
                    icon={HiInformationCircle}
                    className="mt-4"
                  >
                    <span className="font-medium">{emailError}</span>.
                  </Alert>
                )
              )}
            </div>

            <button
              type="submit"
              className="bg-main-0 w-full mt-[37px] py-[13px] font-cabin font-medium text-white text-center text-base rounded-[5px]"
            >
              Đặt lại mật khẩu
            </button>

            <button
              type="submit"
              className="bg-main-0 w-full mt-[37px] py-[13px] font-cabin font-medium text-white text-center text-base rounded-[5px]"
            >
              Đăng nhập
            </button>
          </form>
        </div>
        {/* 2 */}
        <div className="w-[1.45px] h-[641px] bg-gradient-to-r from-[#0A033C] to-[#0A033C] "></div>
        {/* 3 */}
        <div>
          <img src={Investment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
