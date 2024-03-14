import EmployersLogo from "../../../assets/Employers Logo.png";
import MapPin from "../../../assets/MapPin.png";
import "./index.scss";
type Props = {};

const CreateJob = (props: Props) => {
  return (
    <div>
      <div className="main max-w-[1320px] mx-auto ">
        <div className="mx-auto mt-[35.5px]">
          <h1 className="font-bold text-[40px] mb-[50px]">Thêm việc làm mới</h1>
          <div>
            <div>
              <label className="block text-[#6F7482]">Tên công việc</label>
              <input
                className="w-full rounded border border-[#E4E5E8]"
                type="text"
                name=""
                id=""
                placeholder="ABC"
              />
            </div>
            <div className="mt-[50px] flex justify-between">
              <div className="w-[665px]">
                <label className="block text-[#6F7482]">Địa điểm</label>
                <select className="w-full text-[#6F7482] rounded border border-[#E4E5E8]">
                  <option className="p-2">Hà Nội</option>
                  <option className="p-2">Sài Gòn</option>
                  <option className="p-2">Đà Nẵng</option>
                </select>
              </div>
              <div className="w-[452px]">
                <label className="block text-[#6F7482]">
                  Thời gian làm việc
                </label>
                <select className="w-full text-[#6F7482] rounded border border-[#E4E5E8]">
                  <option className="p-2">Full-time</option>
                  <option className="p-2">Part-time</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-[50px] advanced-information">
            <p className="text-[#6F7482]">Thông tin nâng cao</p>
            <div className="grid gap-x-8 gap-y-4 grid-cols-3 px-[100px] pb-[44px]">
              <div>
                <label className="block text-[#6F7482]">Mức lương</label>
                <input
                  className="w-full rounded border border-[#E4E5E8]"
                  type="text"
                  name=""
                  id=""
                  placeholder="$200-$400"
                />
              </div>
              <div>
                <label className="block text-[#6F7482]">
                  Thời hạn ứng tuyển
                </label>
                <select className="text-[#6F7482] rounded border border-[#E4E5E8]">
                  <option value="">28 Dec 22 - 10 Jan 23</option>
                  <option value="">28 Dec 22 - 10 Jan 23</option>
                  <option value="">28 Dec 22 - 10 Jan 23</option>
                </select>
              </div>
              <div>
                <label className="block text-[#6F7482]">Cấp độ</label>
                <select className="text-[#6F7482] rounded border border-[#E4E5E8] w-full">
                  <option value="">Senior</option>
                  <option value="">Middle</option>
                  <option value="">Junior</option>
                  <option value="">Fresher</option>
                  <option value="">Intern</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <div>
              <label className="block text-[#6F7482]">Mô tả công việc</label>
              <textarea
                className="w-full h-[273px] rounded border border-[#E4E5E8]"
                name=""
                id=""
                placeholder="$200-$400"
              />
            </div>
          </div>
        </div>
        <button className="bg-red-700 px-6 py-3 text-white rounded">
          Thêm mới
        </button>
      </div>
      <div className="border-t-2 mt-14 mb-52">
        <div className="border-collapse main max-w-[1320px] mx-auto pt-[100px]">
          <p className="font-bold text-[40px] mb-[50px]">Ứng viên nổi bật</p>
          <div className="grid gap-x-8 gap-y-4 grid-cols-3">
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
            <div className="border border-collapse rounded p-6">
              <p className="mt-5 flex flex-row">
                <span className=" basis-1/6">
                  <img src={EmployersLogo} />
                </span>
                <p className="mx-3 w-full">
                  <span className="text-lg">Dribbble</span>{" "}
                  <span className="featured text-red-700 mb-1">Featured</span>
                  <span className="flex">
                    {" "}
                    <img className="h-[18px]" src={MapPin} />
                    Dhaka, Bangladesh
                  </span>
                </p>
              </p>
              <button className="bg-[#E7F0FA] text-[#0A65CC] font-bold py-2 px-4 rounded w-full mt-5">
                Open Position (3)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
