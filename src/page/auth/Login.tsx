import Logo from "../../assets/logo-rikkei2 2.png";
import Investment from "../../assets/Investment data-rafiki 1.png";
const Login = () => {
  return (
    <div className="px-8 mb-8 min-w-[1440px] mx-auto">
      <div>
        <img src={Logo} alt="" className="px-16 mt-[53px]" />
      </div>
      {/* chia 3 */}
      <div className="mt-[100px] flex justify-between mb-28 ">
        {/* 1 */}
        <div className="w-[486px] h-[106px] ml-[62px]">
          <p className="text-3xxl font-cabin font-bold">
            Cùng Rikkei Education xây dựng hồ sơ nổi bật và nhận được các cơ hội
            sự nghiệp lý tưởng
          </p>
          <form action="" method="post" className="mt-[50px]">
            <div id="email" className="flex flex-col">
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

            <button
              type="submit"
              className="bg-main-0 w-full mt-[37px] py-[13px] font-cabin font-medium text-white text-center text-base rounded-[5px]"
            >
              Đăng nhập
            </button>
          </form>

          <div className="text-center mt-[20px]">
            <p className="text-sm font-cabin font-medium">Quên mật khẩu?</p>
            <p className="text-sm font-cabin font-medium mt-5">
              Bạn không có tài khoản?{" "}
              <span className="text-main-0 hover:text-red-500">
                Tạo 1 tài khoản
              </span>
            </p>
          </div>
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

export default Login;
