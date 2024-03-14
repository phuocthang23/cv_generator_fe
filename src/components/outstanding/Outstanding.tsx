import { CiBookmark, CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Outstanding = () => {
  return (
    <div className="w-full pb-14">
      <div className="flex justify-between items-center px-8 py-8">
        <h1 className=" font-bold text-3xl">công việc nổi bật</h1>
        <div className="flex items-center">
          <p className="text-sm text-red-700"> xem thêm</p>
          <div className="ml-3">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-8 py-8">
        <div className="flex items-center bg-white rounded-md shadow-md p-6">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              Techical Support Specialist
            </h2>
            <div className="flex items-center text-sm text-gray-500 mt-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md mr-2">
                PART-TIME
              </span>
              <span>Salary: $20,000 - $25,000</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <button className="bg-gray-200 px-3 py-4 rounded-md">
                  google
                </button>
                <div className="flex flex-col ml-3">
                  <p className="text-sm font-semibold">Google Inc.</p>
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
        </div>
        {/* /------------------------------------------------------------- */}
        <div className="flex items-center bg-white rounded-md shadow-md p-6">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              Techical Support Specialist
            </h2>
            <div className="flex items-center text-sm text-gray-500 mt-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md mr-2">
                PART-TIME
              </span>
              <span>Salary: $20,000 - $25,000</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <button className="bg-gray-200 px-3 py-4 rounded-md">
                  google
                </button>
                <div className="flex flex-col ml-3">
                  <p className="text-sm font-semibold">Google Inc.</p>
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
        </div>
        {/* ---------------------------- */}
        <div className="flex items-center bg-white rounded-md shadow-md p-6">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              Techical Support Specialist
            </h2>
            <div className="flex items-center text-sm text-gray-500 mt-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md mr-2">
                PART-TIME
              </span>
              <span>Salary: $20,000 - $25,000</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <button className="bg-gray-200 px-3 py-4 rounded-md">
                  google
                </button>
                <div className="flex flex-col ml-3">
                  <p className="text-sm font-semibold">Google Inc.</p>
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
        </div>
      </div>
    </div>
  );
};

export default Outstanding;
