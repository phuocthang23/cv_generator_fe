import { Route, Routes } from "react-router-dom";
import Login from "../layouts/auth/Login";
import Auth from "../layouts/auth/Auth";
import Register from "../layouts/auth/Register";
import Admin from "../page/Admin/Admin";
import Business from "../page/Business/Business";
import Login2 from "../layouts/auth/Login2";
import JobDetail from "../page/MainPage/JobDetail";
import HomePage from "../page/User/home/homePage";
import UserLayout from "../page/User/UserLayout";
import CreateJob from "../page/MainPage/createjob";

const RouterIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="login2" element={<Login2 />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* homepage */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/job-detail" element={<JobDetail />} />
          <Route path="/create-job" element={<CreateJob />} />
        </Route>
        {/* adminpage */}
        <Route path="/admin" element={<Admin />}></Route>
        {/* businesspage */}
        <Route path="/business" element={<Business />}></Route>
      </Routes>
    </div>
  );
};

export default RouterIndex;
