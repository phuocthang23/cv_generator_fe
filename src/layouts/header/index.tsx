import { LuPhoneCall } from "react-icons/lu";
import SubHeader from "../subHeader";
import Banner from "../banner";
const Header = () => {
  return (
    <div>
      <div className=" w-full h-[48px]  bg-[#F1F2F4] flex justify-between items-center py-0 px-[30px]">
        <nav>
          <ul className="flex gap-6 items-center ">
            <li className="hover:text-red-500 ">Trang chủ</li>
            <li className="hover:text-red-500"> Việc làm</li>
            <li className="hover:text-red-500">CV của bạn</li>
            <li className="hover:text-red-500">Customer Support</li>
          </ul>
        </nav>
        <div className=" w-[280px] h-[24px] gap-6 flex items-center">
          <LuPhoneCall />
          <p> +1-202-555-0178</p>
          <button>English</button>
        </div>
      </div>
      <SubHeader />
    </div>
  );
};

export default Header;
