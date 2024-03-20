import { CiLocationOn, CiSearch } from "react-icons/ci";
import Software from "../../assets/header/Software code testing-pana 1.png";
import Icon from "../../assets/header/Icon.png";
import Iconschool from "../../assets/header/Iconschool.png";
import Iconcontract from "../../assets/header/Iconcontract.png";
const Banner = () => {
  return (
    <div className="h-[794px] min-w-[1440px] bg-[#f1f2f4c4] px-10 py-16">
      <div className="flex justify-center items-center">
        <div className=" w-[679px] ml-[70px]">
          <h1 className="text-5xl font-bold">
            Tìm kiếm công việc phù hợp với năng lực của bạn cùng chúng tôi
          </h1>

          <p className="size-4 w-full mt-8">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>

          <div className="w-full mt-12 flex h-20 bg-white items-center">
            <div className="bg-white items-center flex pl-4">
              <button>
                <CiSearch className="text-red-500 w-6 h-6" />
              </button>
              <input
                type="text"
                placeholder="job title, keywords"
                className="border-none bg-white"
              />
            </div>
            <div className="bg-white flex items-center ">
              <button className="border-l-2 border-l-red-500 pl-4">
                <CiLocationOn className="text-red-500 w-6 h-6" />
              </button>
              <input
                type="text"
                placeholder="your location"
                className="border-none bg-white"
              />
            </div>
            <button className="px-8 py-3 h-12 rounded-md bg-[#BC2228] text-white">
              Find Job
            </button>
          </div>
          <p className="mt-6">
            Suggestion: Designer, Programing, Digital Marketing, Video,
            Animation.
          </p>
        </div>

        <div className="w-[550px] h-[400px] ml-[75px] ">
          <img src={Software} alt="" />
        </div>
      </div>
      <div className="max-w-[1440px] flex items-center justify-between  px-[60px] mt-36 gap-6 mx-auto">
        <div className="min-w-[312px] flex items-center bg-white">
          <img src={Icon} alt="" className="min-w-[72px] min-w-[72px] p-5" />
          <div>
            <p>1,75,324</p>
            <p>Live Job</p>
          </div>
        </div>
        <div className="w-[312px] h-[112px] flex gap-7 items-center bg-white">
          <img src={Iconschool} alt="" className="ml-5" />
          <div>
            <p>1,75,324</p>
            <p>Live Job</p>
          </div>
        </div>
        <div className="w-[312px] h-[112px] flex gap-7 items-center bg-white">
          <img src={Iconcontract} alt="" className="ml-5" />
          <div>
            <p>1,75,324</p>
            <p>Live Job</p>
          </div>
        </div>
        <div className="w-[312px] h-[112px] flex gap-7 items-center bg-white">
          <img src={Icon} alt="" className="ml-5" />
          <div>
            <p>1,75,324</p>
            <p>Live Job</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
