import { RxSlash } from "react-icons/rx";
import { NavLink, useLocation, useParams } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter((part) => part !== "");
  const pathTexts: { [key: string]: string } = {
    "/": "Trang chủ",
    "/job": "Công việc",
    "/job/:id": "Chi tiết công việc",
    "/job-application": "CV của bạn",
  };

  const pathText =
    pathTexts[location.pathname] || pathParts[pathParts.length - 1];
  const params = useParams();

  return (
    <div className="w-full py-6 px-[60px] bg-[#F1F2F4] font-inter">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center cursor-pointer">
            <NavLink
              to="/"
              className="inline-flex items-center text-sm font-normal text-[#767F8C] hover:text-main-0"
            >
              Trang chủ
            </NavLink>
          </li>
          {pathParts.map((part, index) => (
            <li key={index}>
              <div className="flex items-center">
                <RxSlash className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
                <NavLink
                  to={`/${pathParts.slice(0, index + 1).join("/")}`}
                  className="ms-1 text-sm font-normal text-[#767F8C] hover:text-main-0 md:ms-2"
                >
                  {index === pathParts.length - 1 && params.id && index === 1
                    ? "Chi tiết công việc"
                    : part}
                </NavLink>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
