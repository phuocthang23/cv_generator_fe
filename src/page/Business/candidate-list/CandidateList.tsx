import { CiLocationOn } from "react-icons/ci";
import "../../../components/candidateOutstanding/index.scss";
import basketball from "../../../assets/basket.png";
import BreadCrumb from "../../../components/breadCrumb/BreadCrumb";
import Filter from "../../../components/filter/Filter";
import { useState } from "react";
import { getCandidate } from "../../../service/candidateService/candidate.service";
import PaginationComponent from "../../../components/pagination/PaginationComponent";
import { FaArrowRight } from "react-icons/fa";
const CandidateList = () => {
  const [page, setPage] = useState(1);
  const limit = 12;

  const { data, total } = getCandidate({ page, limit });
  return (
    <div>
      <BreadCrumb />
      <Filter />
      <div className=" mx-auto px-[60px] font-inter w-[1440px]">
        <div className="grid grid-cols-3 gap-6 pb-[100px] mt-[50px] mx-auto">
          {data?.map((item: any) => {
            return (
              <div
                className=" rounded-lg shadow-md border-2 company "
                key={item.id}
              >
                <div className="flex items-center">
                  <div className="bg-[#EDEFF5]  mr-4">
                    <img
                      src={item.logo === undefined ? basketball : item.logo}
                      alt=""
                      className="w-14 h-14"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold mr-2">
                        {item.name}
                      </h2>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-sm text-[#FFF] bg-[#0BA02C] font-semibold px-5 py-[5px] rounded ">
                        Front-End
                      </span>
                      <span className="text-sm text-[#0A65CC] bg-[#E7F0FA] font-semibold  px-5 py-[5px] rounded-xl">
                        Fresher
                      </span>
                      <div className="ml-10">
                        <FaArrowRight
                          className="text-[#BC2228] cursor-pointer text-xl"
                          // onClick={() => navigate("/list-company")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-3">
                  <div className="flex gap-2 mb-3 items-center">
                    <p className="text-sm text-[#767F8C] inline-block font-normal">
                      Technical in use:
                    </p>
                    {item.skillCandidates &&
                      item.skillCandidates.map((item: any, index: number) => {
                        return (
                          <span
                            key={index}
                            className="text-sm text-[#0BA02C] bg-[#E7F6EA] font-semibold  px-3 py-[5px] rounded"
                          >
                            {item.name}
                          </span>
                        );
                      })}
                  </div>
                  <div className="flex gap-2 mb-3 items-center">
                    <p className="text-sm text-[#767F8C] inline-block font-normal">
                      Foreign Language:
                    </p>
                    <span className="text-sm text-[#F16A1B] bg-[#FCE1D1] font-semibold  px-3 py-[5px] rounded">
                      N2
                    </span>
                  </div>
                  <CiLocationOn className="inline-block" />
                  <p className="text-sm text-[#767F8C] inline-block font-normal">
                    {item.address}, Viet Nam
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PaginationComponent
        total={total || 0}
        onPageChange={(page: any) => setPage(page)}
      />
    </div>
  );
};

export default CandidateList;
