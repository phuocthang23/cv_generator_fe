import logo from "../../../assets/logo.png";
import heart from "../../../assets/heart.png";
import point from "../../../assets/point.png";
import MapTrifold from "../../../assets/MapTrifold.png";
import LinkSimple from "../../../assets/LinkSimple.png";
import Social1 from "../../../assets/Social icon (1).png";
import Social2 from "../../../assets/Social icon (2).png";
import Social from "../../../assets/Social icon.png";
import MapPin from "../../../assets/MapPin.png";
import Envelope from "../../../assets/Envelope.png";
import EmployersLogo from "../../../assets/Employers Logo.png";
import BookmarkSimple from "../../../assets/BookmarkSimple (1).png";
import vetor2 from "../../../assets/Vector2.png";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FiFilter, FiMapPin, FiSearch, FiSettings } from "react-icons/fi";
import { ImTarget } from "react-icons/im";
import { IoOptionsOutline } from "react-icons/io5";
import BreadCrumb from "../../../components/breadCrumb/BreadCrumb";
const BusinessInformationUser = () => {
  return (
    <div>
      <BreadCrumb />
      {/* main */}
      <div className="main max-w-[1320px] mx-auto font-inter">
        <div className=" heading mx-auto mt-[35.5px] flex justify-between">
          <div className="flex items-center">
            <img className="w-[96px] mr-6" src={logo} alt="" />
            <div className="heading ">
              <p className="text-2xl font-medium ">FPT Software</p>
              <p className="text-[18px] mt-3 ml-3">
                <span className="mx-2 text-white itag">Outsource</span>{" "}
                <span className="featured text-[#0A65CC]">Featured</span>
              </p>
              <p className="flex items-center mt-3 ml-6">
                <img src={vetor2} alt="" />
                <NavLink
                  to="https://fptsoftware.com/"
                  target="_blank"
                  className=" text-lg font-normal ml-6"
                >
                  https://fptsoftware.com/
                </NavLink>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="mr-3 bg-red-300 text-red-700 p-4 rounded">
              <img src={heart} alt="" />
            </button>
            <button className="text-base flex items-center bg-red-700 text-white px-[42px] py-4 rounded">
              <span className="mr-3">Theo dõi công ty</span>
            </button>
          </div>
        </div>
        <div className="container mt-8 flex">
          <div className="left-ctn max-w-[760px] ">
            <p className=" text-lg text-black font-medium">
              <b>Mô tả về công ty</b>
            </p>
            <p className="mt-4 text-base">
              <span className="block mb-4">
                Velstar is a Shopify Plus agency, and we partner with brands to
                help them grow, we also do the same with our people!
              </span>
              <span className="block mb-4">
                Here at Velstar, we don't just make websites, we create
                exceptional digital experiences that consumers love. Our team of
                designers, developers, strategists, and creators work together
                to push brands to the next level. From Platform Migration, User
                Experience & User Interface Design, to Digital Marketing, we
                have a proven track record in delivering outstanding eCommerce
                solutions and driving sales for our clients.
              </span>
              <span className="block mb-4">
                The role will involve translating project specifications into
                clean, test-driven, easily maintainable code. You will work with
                the Project and Development teams as well as with the Technical
                Director, adhering closely to project plans and delivering work
                that meets functional & non-functional requirements. You will
                have the opportunity to create new, innovative, secure and
                scalable features for our clients on the Shopify platform
              </span>
              <span>Want to work with us? You're in good company!</span>
            </p>
            <div className="requirements">
              <b className=" block text-black mt-4">Chính sách </b>
              <ul className="ml-6">
                <li>
                  Great troubleshooting and analytical skills combined with the
                  desire to tackle challenges head-on
                </li>
                <li>
                  3+ years of experience in back-end development working either
                  with multiple smaller projects simultaneously or large-scale
                  applications
                </li>
                <li>
                  Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                  Laravel
                </li>
                <li>
                  Working regularly with APIs and Web Services (REST, GrapthQL,
                  SOAP, etc)
                </li>
                <li>
                  Have experience/awareness in Agile application development,
                  commercial off-the-shelf software, middleware, servers and
                  storage, and database management.
                </li>
                <li>
                  Familiarity with version control and project management
                  systems (e.g., Github, Jira)
                </li>
                <li>
                  Great troubleshooting and analytical skills combined with the
                  desire to tackle challenges head-on
                </li>
                <li>
                  Ambitious and hungry to grow your career in a fast-growing
                  agency
                </li>
              </ul>
            </div>
          </div>
          <div className=" ml-6">
            <div className="border border-collapse ml-6 rounded-lg max-h-[102px] ">
              <div className=" p-4 w-[476px]">
                <div className="flex items-center ">
                  <img src={point} alt="" />
                  <p className="font-medium text-base ml-2 ">Địa chỉ công ty</p>
                </div>
                <span className="text-ellipsis block text-[#767F8C] mt-[7px]">
                  Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố
                  Hồ Chí Minh
                </span>
              </div>
            </div>
            <div className=" py-8 gap-6 border border-collapse ml-6 rounded-t-lg mt-[59px] h-[426px] w-[540px] mb-[74px]">
              <div className="flex items-center px-8">
                <img src={MapTrifold} alt="" />
                <span className="text-lg font-medium ml-5">Xem trên Maps</span>
              </div>
              <div className=" mt-6 px-[70px] ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.413753574105!2d106.7899776!3d10.8561017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527696a54947f:0xb9aebc8588a639bb!2zOSDEkC4gRDEsIFBoxrDhu51uZyBUw6JuIFBow7osIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1710586265497!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-[400px]"
                ></iframe>
              </div>
            </div>
            <div className=" flex px-8 py-6 border border-collapse ml-6 rounded-b-lg">
              <div className="">
                <p className="font-medium text-lg mb-5">Share this job:</p>
                <ul className="flex">
                  <li className="w-[147px]">
                    <Link
                      className=" p-[8px] rounded bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={LinkSimple} alt="" />{" "}
                      <span className="text-red-700">Copy Links</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={Social} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-700 flex text-base"
                      to="#"
                    >
                      <img src={Social1} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={Social2} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[8px] rounded ml-2 bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={Envelope} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[761px]">
          {/* find */}
          <div className="desirable mt-10">
            <b className=" block text-black mt-4">Việc làm công ty đang mở</b>
            {/* find */}
            <div className="flex items-center h-[72px] border-2 border-[#E4E5E8] rounded-[8px] mt-4 mb-[21px]">
              {/* search */}
              <div className="flex items-center px-5 py-3">
                <FiSearch className=" text-red-600" />
                <input
                  type="text"
                  placeholder="Search job..."
                  className="px-4 py-2 border-none w-[190px] "
                />
              </div>
              <div className="h-full w-[2px] bg-[#E4E5E8]"></div>
              {/* location */}
              <div className="flex items-center px-5 py-3 ">
                <FiMapPin className="text-red-600" />
                <input
                  type="text"
                  placeholder="Vị trí"
                  className="px-4 py-2 border-none  relative w-[190px] "
                />
                <ImTarget className="text-red-600  absolute ml-[180px]" />
              </div>

              <button className="flex items-center px-6 py-3 bg-[#F1F2F4] mr-4">
                <IoOptionsOutline className="text-black" />
                <span className="text-gray-600 text-base font-semibold">
                  Filters
                </span>
              </button>
              <button className="px-6 py-3 bg-red-600 text-white rounded-[3px]">
                <span className="text-white text-base font-semibold">
                  Find Job
                </span>
              </button>
            </div>
          </div>
          {/* cty */}
          <div className="flex flex-col gap-6">
            <div className="border border-collapse rounded p-6">
              <p className="text-lg">
                Techical Support Specialist
                <p className="text-sm mt-2">
                  <span className="text-light-green-700 rounded bg-[#E7F6EA] px-1 py-2">
                    FULL-TIME
                  </span>{" "}
                  <span>Salary: $20,000 - $25,000</span>
                </p>
              </p>
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <span className="mx-3 w-full">
                  Google Inc.{" "}
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </span>
                <span className="basis-1/6">
                  <img src={BookmarkSimple} alt="" />
                </span>
              </p>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="text-lg">
                Senior UX Designer
                <p className="text-sm mt-2">
                  <span className="text-light-green-700 rounded bg-[#E7F6EA] px-1 py-2">
                    FULL-TIME
                  </span>{" "}
                  <span>Salary: $20,000 - $25,000</span>
                </p>
              </p>
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <span className="mx-3 w-full">
                  Google Inc.{" "}
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </span>
                <span className="basis-1/6">
                  <img src={BookmarkSimple} alt="" />
                </span>
              </p>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="text-lg">
                Marketing Officer
                <p className="text-sm mt-2">
                  <span className="text-light-green-700 rounded bg-[#E7F6EA] px-1 py-2">
                    FULL-TIME
                  </span>{" "}
                  <span>Salary: $20,000 - $25,000</span>
                </p>
              </p>
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <span className="mx-3 w-full">
                  Google Inc.{" "}
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </span>
                <span className="basis-1/6">
                  <img src={BookmarkSimple} alt="" />
                </span>
              </p>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="text-lg">
                Marketing Officer
                <p className="text-sm mt-2">
                  <span className="text-light-green-700 rounded bg-[#E7F6EA] px-1 py-2">
                    FULL-TIME
                  </span>{" "}
                  <span>Salary: $20,000 - $25,000</span>
                </p>
              </p>
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <span className="mx-3 w-full">
                  Google Inc.{" "}
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </span>
                <span className="basis-1/6">
                  <img src={BookmarkSimple} alt="" />
                </span>
              </p>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="text-lg">
                Marketing Officer
                <p className="text-sm mt-2">
                  <span className="text-light-green-700 rounded bg-[#E7F6EA] px-1 py-2">
                    FULL-TIME
                  </span>{" "}
                  <span>Salary: $20,000 - $25,000</span>
                </p>
              </p>
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <span className="mx-3 w-full">
                  Google Inc.{" "}
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </span>
                <span className="basis-1/6">
                  <img src={BookmarkSimple} alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 mt-14 mb-52 border">
        <div className="border-collapse main max-w-[1320px] mx-auto pt-[100px]">
          <p className="font-bold text-[40px] mb-[50px]">Ứng viên nổi bật</p>
          <div className="grid gap-x-8 gap-y-4 grid-cols-3">
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformationUser;
