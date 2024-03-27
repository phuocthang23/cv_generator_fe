import { CiBookmark, CiLocationOn } from "react-icons/ci";
import EmployersLogo2 from "../../../assets/Employers Logo 2.png";
import "./index.scss";
import BreadCrumb from "../../../components/breadCrumb/BreadCrumb";
import Filter from "../../../components/filter/Filter";
import { getJob } from "../../../service/jobService/job.service";
import PaginationComponent from "../../../components/pagination/PaginationComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const limit = 12;

  const data = getJob({ page, limit });

  return (
    <div>
      <BreadCrumb />
      <Filter />
      <div className=" mx-auto px-[60px] font-inter w-[1440px] pb-[100px]">
        {data && data?.data && data?.data.length > 0 && (
          <div className="grid grid-cols-3 gap-6 mt-[50px] max-h-[1320px]">
            {data?.data.map((item: any, index: number) => (
              <div
                key={index}
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
                      Salary: ${item.salary.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button className="bg-gray-200 border-2 border-gray-300 rounded-md">
                      <img
                        src={item.company.logo}
                        alt=""
                        className="w-9 h-9 rounded-md"
                      />
                    </button>
                    <div className="flex flex-col ml-3">
                      <p className="text-sm font-semibold">
                        {item.company.name}
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
            ))}
          </div>
        )}
      </div>
      <PaginationComponent
        total={data?.total || 0}
        onPageChange={(page: any) => setPage(page)}
      />
    </div>
  );
};

export default Job;
