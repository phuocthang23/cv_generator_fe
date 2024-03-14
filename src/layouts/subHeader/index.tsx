import { Label, Select, TextInput } from "flowbite-react";
import logo from "../../assets/header/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
const SubHeader = () => {
  return (
    <div className=" w-full h-[139px] px-[20px] top-[45px] left-[0px] py-0 gap-[10px] flex items-center justify-evenly">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="flex items-center w-[668px] h-[50px] rounded-[5px] border-[1px] border-[#E4E5E8]">
        <div className="max-w-md ">
          <select className=" border-none text-gray-900 text-base block min-w-10 px-6">
            <option>Hà Nội</option>
            <option>Đà Nẵng</option>
            <option>Huế</option>
            <option>HCM</option>
          </select>
        </div>
        <form className="max-w-md  ">
          <div className="relative ml-2 border-l-2 border-l-blue-gray-300">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoSearchOutline />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[450px] p-[8px] ps-10 text-sm px-3  text-gray-900 border-none  bg-white"
              placeholder="Search "
              required
            />
          </div>
        </form>
      </div>

      <div className="flex gap-3 items-center h-[48px] w-[430px] justify-items-center">
        <button className="min-w-[134px] h-12 rounded-[3px] bg-[#BC2228] border-[1px] border-[#BC2228] gap-3 px-6 py-3 text-white">
          Đăng Nhập
        </button>
        <button className="w-[134px] h-12 rounded-[3px] bg-white border-[1px] border-[#BC2228] gap-3 px-6 py-3 text-[#BC2228]">
          Đăng ký
        </button>
        <button className="min-w-[134px] h-12 rounded-[3px] bg-[#231651] border-[1px] border-[#231651] gap-3 px-6 py-3 text-white">
          Đăng Tuyển
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
