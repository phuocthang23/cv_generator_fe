import Logo from "../../../assets/logo-rikkei2 2.png";
import Investment from "../../../assets/Investment data-rafiki 1.png";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { ConfirmPasswordService } from "../../../service/auth/ComfirmPassword.service";
const ComfirmPassword = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
    messageError,
  } = ConfirmPasswordService();

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
                  messageError ? "border-red-500" : "border-[#DEDDE4]"
                }`}
              />
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
                  messageError ? "border-red-500" : "border-[#DEDDE4]"
                }`}
              />
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
              Cập nhật Password mới
            </button>
          </form>
        </div>
        <div className="w-[1.45px] h-[900px] bg-gradient-to-r from-[#0A033C] to-[#0A033C] "></div>
        <div>
          <img src={Investment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComfirmPassword;
