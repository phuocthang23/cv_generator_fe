import { CiLocationOn } from "react-icons/ci";
import "../companyOutstanding/index.scss";
import basketball from "../../assets/basket.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { companyService } from "../../service/companyService/company.service";

const Company = () => {
  const navigate = useNavigate();
  const page = 1;
  const limit = 6;
  const data = companyService({ page: page, limit: limit });

  return (
    <div className=" mx-auto px-[60px] font-inter w-[1440px]">
      <div className="flex justify-between items-center h-12 max-w-[1320px]">
        <h1 className=" font-bold text-3xl">Công ty nổi bật</h1>
        <div className="flex items-center">
          <p
            className="text-sm text-red-700 cursor-pointer"
            onClick={() => navigate("/list-company")}
          >
            {" "}
            xem thêm
          </p>
          <div className="ml-3">
            <FaArrowRight
              className="text-main-0 cursor-pointer"
              onClick={() => navigate("/list-company")}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 pb-[100px] mt-[50px] mx-auto">
        {data.data?.map((item: any) => (
          <div
            className=" rounded-lg shadow-md border-2 company cursor-pointer"
            onClick={() => navigate(`/company/${item.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center">
              <div className="bg-pink-600  mr-4">
                <img
                  src={item.logo === null ? basketball : item.logo}
                  alt=""
                  className="w-12 h-12"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold mr-2">{item.name}</h2>
                  <span className="text-sm text-[#E05151] bg-[#FCEEEE] px-3 py-[3px] rounded-lg">
                    Featured
                  </span>
                </div>
                <CiLocationOn className="inline-block" />
                <p className="text-sm text-[#767F8C] inline-block font-normal">
                  hồ chí minh
                </p>
              </div>
            </div>
            <div className=" mt-5">
              <button className="bg-[#E7F0FA] text-[#0A65CC]  py-3 rounded-md text-sm px-6 w-[376px] text-center text-base font-semibold">
                Open Position ({item?.jobs.length})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
