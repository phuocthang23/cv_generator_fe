import { Outlet } from "react-router-dom";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import SubHeader from "../../layouts/subHeader";
import Banner from "../../layouts/banner";
const UserLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
