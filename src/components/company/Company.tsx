import { CiLocationOn } from "react-icons/ci";

const Company = () => {
  return (
    <div className="w-full pb-14">
      <div>
        <h1 className=" font-bold text-3xl px-8">công ty nổi bật</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 px-8 py-8">
        <div className=" bg-white rounded-md shadow-md px-8 py-6">
          <div className="flex items-center">
            <div className="bg-pink-600 text-white rounded-full p-2 mr-4">
              <CiLocationOn />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">Dribbble</h2>
                <span className="text-sm text-gray-500 bg-red-200 px-2 px-2 rounded-lg">
                  Featured
                </span>
              </div>
              <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="ml-auto mt-4">
            <span className="bg-blue-100 text-blue-800  py-2 rounded-md text-sm px-24">
              Open Position (3)
            </span>
          </div>
        </div>
        {/* ---------- */}
        <div className=" bg-white rounded-md shadow-md px-8 py-6">
          <div className="flex items-center">
            <div className="bg-pink-600 text-white rounded-full p-2 mr-4">
              <CiLocationOn />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">Dribbble</h2>
                <span className="text-sm text-gray-500 bg-red-200 px-2 px-2 rounded-lg">
                  Featured
                </span>
              </div>
              <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="ml-auto mt-4">
            <span className="bg-blue-100 text-blue-800  py-2 rounded-md text-sm px-24">
              Open Position (3)
            </span>
          </div>
        </div>
        {/* ------------ */}
        <div className=" bg-white rounded-md shadow-md px-8 py-6">
          <div className="flex items-center">
            <div className="bg-pink-600 text-white rounded-full p-2 mr-4">
              <CiLocationOn />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">Dribbble</h2>
                <span className="text-sm text-gray-500 bg-red-200 px-2 px-2 rounded-lg">
                  Featured
                </span>
              </div>
              <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="ml-auto mt-4">
            <span className="bg-blue-100 text-blue-800  py-2 rounded-md text-sm px-24">
              Open Position (3)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
