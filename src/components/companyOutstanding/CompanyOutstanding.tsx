import { CiBookmark, CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import EmployersLogo2 from "../../assets/Employers Logo 2.png";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { getJob } from "../../service/jobService/job.service";
const CompanyOutstanding = () => {
  const navigate = useNavigate();
  const page = 1;
  const limit = 9;
  const data = getJob({ page: page, limit: limit });
  return (
    <div className=" mx-auto px-[60px] font-inter w-[1440px] py-[100px]">
      <div className="flex justify-between items-center h-12 max-w-[1320px]">
        <h1 className=" font-bold text-3xl">Công việc nổi bật</h1>
        <div className="flex items-center">
          <p
            className="text-sm text-red-700 cursor-pointer"
            onClick={() => navigate("/job")}
          >
            {" "}
            xem thêm
          </p>
          <div className="ml-3">
            <FaArrowRight
              className="text-main-0 cursor-pointer"
              onClick={() => navigate("/job")}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-[50px] max-w-[1320px]">
        {data?.data?.map((item: any) => {
          return (
            <div
              key={item.id}
              className=" bg-white rounded-md shadow-md company border-2 border-[#E4E5E8] cursor-pointer"
              onClick={() => navigate(`/job/${item.id}`)}
            >
              <div className=" mb-5">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <span className="bg-[#E7F6EA] text-[#0BA02C] px-2 py-1 rounded-md mr-2 text-xs font-semibold">
                    PART-TIME
                  </span>
                  <span className="text-sm font-normal">
                    Salary: $
                    {new Intl.NumberFormat("en-US").format(item.salary)}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button className="bg-gray-200">
                    <img
                      src={item?.company.logo ?? EmployersLogo2}
                      alt=""
                      className="w-8 h-8 rounded-md"
                    />
                  </button>
                  <div className="flex flex-col ml-3">
                    <p className="text-sm font-semibold">
                      {item?.company.name}
                    </p>
                    <div className="flex items-center ">
                      <CiLocationOn />
                      <span className="text-gray-700">Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
                <div>
                  <CiBookmark className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyOutstanding;
