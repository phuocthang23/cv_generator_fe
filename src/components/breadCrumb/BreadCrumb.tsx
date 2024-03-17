import { RxSlash } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div className="w-full py-6 px-[60px] bg-[#F1F2F4] font-inter">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <NavLink
              to="/"
              className="inline-flex items-center text-sm font-normal text-[#767F8C] hover:text-main-0"
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <div className="flex items-center">
              <RxSlash className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
              <NavLink
                to="/projects"
                className="ms-1 text-sm font-normal text-[#767F8C] hover:text-main-0 md:ms-2"
              >
                Thông tin doanh nghiệp
              </NavLink>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <RxSlash className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
              <span className="ms-1 text-sm font-medium text-[#18191C] md:ms-2">
                FPT Software
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
