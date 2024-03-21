import { useNavigate } from "react-router-dom";
import { useAuthLogic } from "../../utils/authLogic";
import Investment from "../../assets/Investment data-rafiki 1.png";
import Logo from "../../assets/logo-rikkei2 2.png";
import { RegisterApi } from "../../apis/auth/auth";

const Register = () => {
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

  const roleId = 3;
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response: any = await RegisterApi({
      email,
      password,
      roleId,
      userName,
    });
    if (response.success) {
      navigate("/auth");
    } else if (response.statusCode === 409) {
      setEmailError("Email đã được tồn tại");
    }
  };

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
    </div>
  );
};

export default Register;
