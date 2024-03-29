import { Outlet } from "react-router-dom";
import HeaderJobApplication from "../../../components/HeaderJobApplication";

const JobApplicationLayout = () => {
  return (
    <div className="bg-[#F1F2F4]">
      <HeaderJobApplication />
      <Outlet />
    </div>
  );
};

export default JobApplicationLayout;
