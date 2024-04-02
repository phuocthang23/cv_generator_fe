import { CiLocationOn, CiSearch } from "react-icons/ci";
import { ImTarget } from "react-icons/im";
import { IoIosOptions } from "react-icons/io";
import { searchJobs } from "../../service/jobService/jobSearch.service";
import { generateToken } from "../../utils/generateToken.utils";

const Filter = () => {
  const { handleSearch, searchTerm, setSearchTerm, handleSearchCandidate } =
    searchJobs();
  const dataToken: any = generateToken();

  return (
    <div className="mx-auto px-[60px] font-inter w-[1440px] mt-5">
      <div className=" border border-[#E4E5E8] border-2 rounded-lg flex justify-evenly min-h-[72px] px-3">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="min-w-[576px] my-3 pl-10 border-none focus:ring-0 focus:border-none"
            placeholder="Search by: Job tittle, Position, Keyword..."
          />
          <CiSearch className="text-main-0 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>

        <div className=" w-[2px] bg-[#E4E5E8] mx-2"></div>
        <div className="relative">
          <input
            type="text"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            className="min-w-[424px] my-3 pl-10 border-none focus:ring-0 focus:border-none"
            placeholder="Search by: Job tittle, Position, Keyword..."
          />
          <CiLocationOn className="text-main-0 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <ImTarget className="text-main-0 absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="flex justify-between py-3 gap-3 font-semibold text-base">
          <div className="relative ">
            <IoIosOptions className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 rotate-90" />
            <button className="px-8 py-3 bg-[#F1F2F4] whitespace-nowrap">
              Filter
            </button>
          </div>
          <button
            className="px-6 bg-main-0 text-white whitespace-nowrap"
            onClick={
              dataToken?.role === "company"
                ? () => handleSearchCandidate(searchTerm)
                : () => handleSearch(searchTerm)
            }
          >
            {dataToken?.role === "company" ? "Find Candidate" : "Find Job"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
