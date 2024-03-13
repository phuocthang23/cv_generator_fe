import { Route, Routes } from "react-router-dom";
import Login from "../layouts/auth/login/Login";
import Auth from "../layouts/auth/Auth";
import Register from "../layouts/auth/register/Register";
import HomePage from "../page/User/home/homePage";
import Login2 from "../layouts/auth/login/Login2";
import UserLayout from "../page/User/UserLayout";
import AdminLayout from "../page/Admin/AdminLayout";
import BusinessLayout from "../page/Business/BusinessLayout";

const RouterIndex = () => {
  return (
    <div>
      <Routes>
        {/* auth */}
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="login2" element={<Login2 />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* homepage */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* adminpage */}
        <Route path="/admin" element={<AdminLayout />}></Route>

        {/* businesspage */}
        <Route path="/business" element={<BusinessLayout />}></Route>
      </Routes>
    </div>
  );
};

export default RouterIndex;
