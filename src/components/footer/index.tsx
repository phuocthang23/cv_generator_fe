import { NavLink } from "react-router-dom";
import LogoFooter from "../../assets/header/LogoFooter.png";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#BC2228] pt-10 pb-4 px-20 h-[346px] min-w-[1440px] gap-10">
      <div className="h-[290px] gap-10">
        <div className="flex justify-evenly items-center gap-6">
          <div className="w-[566px] h-[232px] gap-10 flex flex-col gap-3 justify-between">
            <img src={LogoFooter} alt="" className="w-[100px] h-14" />
            <div className="float-left w-[296px] h-[50px] mt-5 text-sm font-medium text-white flex flex-col gap-2">
              <p>
                Tầng 7 tháp A toà Sông Đà, đường Phạm Hùng, quận Nam Từ Liêm, Hà
                Nội
              </p>
              <p>0862 069 233</p>
              <p>academy@rikkeisoft.com</p>
            </div>
            <div className="flex gap-4 mt-6">
              <FaFacebookSquare className="text-white h-7 w-7" />
              <FaYoutube className="text-white h-7 w-7" />
            </div>
          </div>

          <div className="flex  w-[550px] justify-between items-center text-white gap-2">
            <div className="w-[150px]">
              <h4 className="font-medium">Khóa học</h4>
              <ul className=" mt-4 font-medium text-[#EBB0B2]">
                <li>Làm quen với Code</li>
                <li>Bootcamp Fulltime</li>
                <li>Bootcamp Parttime</li>
                <li>Kỹ sư CNTT - PTIT</li>
                <li>Bổ trợ cho nghề</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Tài nguyên học tập</h4>
              <ul className=" mt-4 font-medium text-[#EBB0B2]">
                <li>Blog</li>
                <li>Ebook - Report</li>
                <li>Khóa học miễn phí</li>
                <li>Sự kiện - Webinar</li>
                <li>Cộng đồng</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Vì sao chọn Rikkei Academy</h4>
              <ul className=" mt-4 font-medium text-[#EBB0B2] ">
                <li>Về Rikkei Academy</li>
                <li>Hệ sinh thái Rikkei</li>
                <li>Cơ hội nghề nghiệp</li>
                <li>Tấm gương sáng</li>
                <li>Liên hệ</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center text-sm text-white mt-8">
          Copyright 2023 © Rikkei Education. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
