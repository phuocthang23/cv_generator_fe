import { useNavigate } from "react-router-dom";
import logo from "../../assets/header/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { generateToken } from "../../utils/generateToken.utils";
import { tokenType } from "../../types/token";
import { Avatar, Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

const SubHeader = () => {
  const token = generateToken() as tokenType | null;

  const hasToken = token !== null;
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleRegister = () => {
    navigate("/auth/register");
  };

  const handleSignOut = () => {
    localStorage.removeItem("Auth");

    navigate("/auth");
  };
  return (
    <div className="min-w-[1440px] max-h-[139px] py-[30px]">
      <div className=" w-[1250px] min-h-[72px] py-2 px-[30px] flex items-center justify-between mx-auto">
        <div className="min-w-[127px] min-h-[56px] mr-[30px]">
          <img src={logo} alt="" />
        </div>

        <div className=" w-[668px] h-[50px] rounded-[5px] border-[1px] border-[#E4E5E8] mr-[30px]">
          <div className=" w-[368px] flex items-center ml-6 my-[9px]">
            <div className=" mr-5">
              <select className=" border-none text-gray-900 text-base min-w-[73px] py-[6px]">
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
                <option>Huế</option>
                <option>HCM</option>
              </select>
            </div>
            <div className="w-8 border-[1px] border-[#E4E5E8] rotate-90"></div>

            <div className="relative ml-5">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoSearchOutline className="text-main-0" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block min-w-[225] p-[8px] ps-10 text-sm px-3  text-gray-900 border-none  bg-white"
                placeholder="Search "
                required
              />
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-3 items-center min-h-[48px]">
          {hasToken ? (
            <>
              <div className="text-[#BC2228] text-[25px] ml-[-10px]">
                <IoMdNotifications />
              </div>

              <Dropdown
                label={
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    status="online"
                    rounded
                    className="mr-2 ml-[-15px]"
                  />
                }
                arrowIcon={false}
                inline
              >
                <Dropdown.Header></Dropdown.Header>
                <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
                <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
                <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item icon={HiLogout} onClick={handleSignOut}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>

              <p className="">{token?.userName}</p>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="rounded-[3px] bg-[#BC2228] border-[1px] border-[#BC2228] px-6 py-3 text-white whitespace-nowrap"
              >
                Đăng Nhập
              </button>
              <button
                onClick={handleRegister}
                className="rounded-[3px] bg-white border-[1px] border-[#BC2228] px-6 py-3 text-[#BC2228] whitespace-nowrap"
              >
                Đăng ký
              </button>
              <button className="rounded-[3px] bg-white border-[1px] border-[#BC2228] px-6 py-3 text-[#BC2228] whitespace-nowrap">
                Đăng tuyển
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
