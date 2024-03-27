import { CiLocationOn } from "react-icons/ci";
import "../../../components/outstanding/index.scss";
import basketball from "../../../assets/basket.png";
import BreadCrumb from "../../../components/breadCrumb/BreadCrumb";
import Filter from "../../../components/filter/Filter";
import { useState } from "react";
import { companyService } from "../../../service/companyService/company.service";
import PaginationComponent from "../../../components/pagination/PaginationComponent";
const CompanyList = () => {
  const [page, setPage] = useState(1);
  const limit = 12;

  const { data, total } = companyService({ page, limit });
  return (
    <div>
      <BreadCrumb />
      <Filter />
      <div className=" mx-auto px-[60px] font-inter w-[1440px]">
        <div className="grid grid-cols-3 gap-6 pb-[100px] mt-[50px] mx-auto">
          {data?.map((item: any) => (
            <div
              className=" rounded-lg shadow-md border-2 company "
              key={item.id}
            >
              <div className="flex items-center">
                <div className="bg-pink-600  mr-4">
                  <img
                    src={item.logo === undefined ? basketball : item.logo}
                    alt=""
                    className="w-14 h-14"
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
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className=" mt-5">
                <button className="bg-[#E7F0FA] text-[#0A65CC]  py-3 rounded-md text-sm px-6 w-[376px] text-center text-base font-semibold">
                  Open Position ({item.jobs.length})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PaginationComponent
        total={total || 0}
        onPageChange={(page: any) => setPage(page)}
      />
    </div>
  );
};

export default CompanyList;
