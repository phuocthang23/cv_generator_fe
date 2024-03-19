import logo from "../../assets/header/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
const SubHeader = () => {
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

        <div className="flex grid grid-cols-3 gap-3 items-center min-h-[48px]">
          <button className=" rounded-[3px] bg-[#BC2228] border-[1px] border-[#BC2228] px-6 py-3 text-white whitespace-nowrap">
            Đăng Nhập
          </button>
          <button className=" rounded-[3px] bg-white border-[1px] border-[#BC2228] px-6 py-3 text-[#BC2228] whitespace-nowrap">
            Đăng ký
          </button>
          <button className=" rounded-[3px] bg-[#231651] border-[1px] border-[#231651] px-6 py-3 text-white whitespace-nowrap">
            Đăng Tuyển
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
