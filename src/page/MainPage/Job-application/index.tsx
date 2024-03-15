import { Outlet } from "react-router-dom";
import HeaderJobApplication from "../../../layouts/JobApplication";

const JobApplicationLayout = () => {
  return (
    <div className="bg-[#F1F2F4]">
      <HeaderJobApplication />
      <Outlet />
    </div>
  );
};

export default JobApplicationLayout;
