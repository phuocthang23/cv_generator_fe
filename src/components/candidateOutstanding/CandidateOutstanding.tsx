import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import basketball from "../../assets/basket.png";

import "./index.scss";
import { useNavigate } from "react-router-dom";
import { getCandidate } from "../../service/candidateService/candidate.service";
const CandidateOutstanding = () => {
  const navigate = useNavigate();
  const page = 1;
  const limit = 6;
  const data = getCandidate({ page, limit });
  return (
    <div className=" mx-auto px-[60px] font-inter w-[1440px] py-[100px]">
      <div className="flex justify-between items-center h-12 max-w-[1320px]">
        <h1 className=" font-bold text-3xl">Ứng viên nổi bật</h1>
        <div className="flex items-center">
          <p
            className="text-sm text-red-700 cursor-pointer"
            onClick={() => navigate("/business")}
          >
            {" "}
            xem thêm
          </p>
          <div className="ml-3">
            <FaArrowRight
              className="text-main-0 cursor-pointer"
              onClick={() => navigate("/business")}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-[50px] max-w-[1320px]">
        {data.data?.map((item: any) => {
          return (
            <div
              className=" rounded-lg shadow-md border-2 company cursor-pointer"
              key={item.id}
              onClick={() => navigate(`/business/${item.id}`)}
            >
              <div className="flex items-center">
                <div className="bg-[#EDEFF5]  mr-4">
                  <img
                    src={item.avatar === undefined ? basketball : item.avatar}
                    alt=""
                    className="w-14 h-14"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold mr-2">{item.name}</h2>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-sm text-[#FFF] bg-[#0BA02C] font-semibold px-5 py-[5px] rounded ">
                      Front-End
                    </span>
                    <span className="text-sm text-[#0A65CC] bg-[#E7F0FA] font-semibold  px-5 py-[5px] rounded-xl">
                      Fresher
                    </span>
                    <div className="ml-10">
                      <FaArrowRight className="text-[#BC2228] cursor-pointer text-xl" />
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
  );
};

export default CandidateOutstanding;
