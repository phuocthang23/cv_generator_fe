import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo-rikkei2 2.png";
import { registerCandidateService } from "../../../service/candidateService/RegisterCadindate.service";
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
    nameErr,
    handleChange,
    phoneErr,
    setAddress,
    setDateTime,
    handlePhoneChange,
  } = registerCandidateService();

  return (
    <div className="px-8 mb-8 min-w-[1440px] mx-auto">
      <div>
        <img src={Logo} alt="" className="px-16 mt-[53px]" />
      </div>

      <div className="text-3xxl font-cabin font-bold w-[486px] mt-8 ml-16">
        Đăng kí để có thể tiếp cận nguồn nhân lực chất lượng cao
      </div>

      <div className=" px-16 w-[1440px] mt-5 mb-28">
        <form onSubmit={handleSubmit}>
          <div className=" flex items-center justify-between">
            <div className="w-[486px]">
              <div className="flex items-center mb-5">
                <div className="w-4 h-10 bg-main-0"></div>
                <p className="text-2xl ml-5">Thông tin tài khoản</p>
              </div>
              <div id="name" className="flex flex-col">
                <label htmlFor="" className="mb-4">
                  Họ tên
                </label>
                <input
                  type="text"
                  placeholder="abcd"
                  value={userName}
                  required
                  onChange={(e) => setUserName(e.target.value)}
                  className={`h-16 rounded-[5px] border ${
                    nameErr && userName !== ""
                      ? "border-red-500"
                      : "border-[#DEDDE4]"
                  }`}
                />
                {nameErr && userName !== "" && (
                  <p className="text-red-500">{nameErr}</p>
                )}
              </div>
              <div id="email" className="flex flex-col mt-9">
                <label htmlFor="" className="mb-4">
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
              <div id="password" className="flex flex-col mt-9">
                <label htmlFor="" className="mb-4">
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
              <div id="repassword" className="flex flex-col mt-9">
                <label htmlFor="" className="mb-4">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  value={confirmPassword}
                  required
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
            </div>
            {/* thanh ngang */}
            <div className="w-[1.45px] h-[600px] bg-gradient-to-r from-[#0A033C] to-[#0A033C] mx-5 "></div>
            {/* form 2 */}
            <div className="w-[486px]">
              <div className="flex items-center mb-5">
                <div className="w-4 h-10 bg-main-0"></div>
                <p className="text-2xl ml-5">Thông tin ứng viên</p>
              </div>

              <div id="name" className="flex flex-col">
                <label htmlFor="" className="mb-4">
                  Ngày sinh
                </label>
                <input
                  type="date"
                  value={dateTime}
                  required
                  onChange={(e) => setDateTime(e.target.value)}
                  className={`h-16 rounded-[5px] border ${
                    emailError && email !== ""
                      ? "border-red-500"
                      : "border-[#DEDDE4]"
                  }`}
                />
              </div>
              <div id="adress" className="flex flex-col mt-9">
                <label htmlFor="" className="mb-4">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  className={`h-16 rounded-[5px] border border-[#DEDDE4]`}
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
                  required
                  onChange={handlePhoneChange}
                  className={`h-16 rounded-[5px] border ${
                    phoneErr && phone !== ""
                      ? "border-red-500"
                      : "border-[#DEDDE4]"
                  }`}
                />
                {phoneErr && phone !== "" && (
                  <p className="text-red-500">{phoneErr}</p>
                )}
              </div>
              <div id="repassword" className="flex flex-col mt-9">
                <label htmlFor="" className="mb-4">
                  Giới tính
                </label>
                <select
                  value={gender}
                  onChange={handleChange}
                  className=" border text-gray-900 text-base min-w-[73px] h-16 py-[6px]"
                >
                  <option value={0}>Nam</option>
                  <option value={1}>Nữ</option>
                </select>
              </div>
            </div>
          </div>
          {messageError && (
            <Alert color="failure" icon={HiInformationCircle} className="mt-4">
              <span className="font-medium">{messageError}</span>.
            </Alert>
          )}

          <div className="flex justify-center mt-[37px]">
            <button
              type="submit"
              className="bg-main-0 w-2/4 py-[13px] font-cabin font-medium text-white text-center text-base rounded-[5px]"
            >
              Đăng Ký
            </button>
          </div>

          <div className="text-center mt-[20px] font-cabin">
            <p className="text-sm  font-medium mt-5">
              bạn đã có tài khoản?{" "}
              <span
                className="text-main-0 hover:text-red-500 cursor-pointer"
                onClick={() => navigate("/auth/login-candidate")}
              >
                Đăng nhập tài khoản ứng viên
              </span>
            </p>
          </div>

          <div className="text-center mt-[20px]">
            <p className="text-sm font-cabin font-medium mt-5">
              bạn đã có tài khoản?{" "}
              <span
                className="text-main-0 hover:text-red-500 cursor-pointer"
                onClick={() => navigate("/auth")}
              >
                Đăng nhập tài khoản doanh nghiệp
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCandidate;
