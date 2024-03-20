import { NavLink } from "react-router-dom";
import "./index.scss";
const HeaderJobApplication = () => {
  const activeStyle = "text-red-700 border-b-2 border-b-red-700 py-[14px]";
  return (
    <div className="bg-white">
      <div className="max-w-[1320px] mx-auto py-[14px]">
        <ul className="flex text-white">
          <li>
            <NavLink
              to="/job-application"
              className={({ isActive }) =>
                isActive ? activeStyle : "uncatived"
              }
            >
              Hồ sơ
            </NavLink>
          </li>
          <li className="px-6">
            <NavLink
              to="/cv-manager"
              className={({ isActive }) =>
                isActive ? activeStyle : "uncatived"
              }
            >
              Quản lý CV
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/job-request"
              className={({ isActive }) =>
                isActive ? activeStyle : "uncatived"
              }
            >
              Tiêu chí tìm việc
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderJobApplication;
