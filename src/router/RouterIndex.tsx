import { Route, Routes } from "react-router-dom";
import Login from "../layouts/auth/Login";
import Auth from "../layouts/auth/Auth";
import Register from "../layouts/auth/Register";
import UserLayout from "../layouts/User/UserLayout";
import HomePage from "../layouts/User/Home/HomePage";
import Admin from "../page/Admin/Admin";
import Business from "../page/Business/Business";

const RouterIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* homepage */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
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
