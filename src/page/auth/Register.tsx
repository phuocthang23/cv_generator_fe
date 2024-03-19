import { useNavigate } from "react-router-dom";
import { useAuthLogic } from "../../utils/authLogic";
import Investment from "../../assets/Investment data-rafiki 1.png";
import Logo from "../../assets/logo-rikkei2 2.png";

const Register = () => {
  // const {
  //   email,
  //   setEmail,
  //   password,
  //   confirmPassword,
  //   setConfirmPassword,
  //   setPassword,
  //   emailError,
  //   passwordError,
  //   confirmPasswordError,
  // } = useAuthLogic(true);
  // const navigate = useNavigate();

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   if (!emailError && !passwordError) {
  //     const newUser = { email, password, role: "user" };
  //     users.push(newUser);
  //     navigate("/login");
  //   }
  // };

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
          <form action="" method="post" className="mt-[50px]">
            <div id="name" className="flex flex-col">
              <label htmlFor="" className="mb-4">
                Họ tên
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="h-16 round-[5px] border border-[#DEDDE4]"
              />
            </div>
            <div id="email" className="flex flex-col mt-9">
              <label htmlFor="" className="mb-4">
                Email
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="h-16 round-[5px] border border-[#DEDDE4]"
              />
            </div>
            <div id="password" className="flex flex-col mt-9">
              <label htmlFor="" className="mb-4">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="h-16 round-[5px] border border-[#DEDDE4]"
              />
            </div>
            <div id="repassword" className="flex flex-col mt-9">
              <label htmlFor="" className="mb-4">
                Confirm password
              </label>
              <input
                type="password"
                placeholder="********"
                className="h-16 round-[5px] border border-[#DEDDE4]"
              />
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
              Tạo 1 tài khoản{" "}
              <span className="text-main-0 hover:text-red-500">
                Tạo 1 tài khoản
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
