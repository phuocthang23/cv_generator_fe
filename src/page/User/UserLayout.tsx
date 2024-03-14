import { Outlet } from "react-router-dom";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import Banner from "../../layouts/banner";
const UserLayout = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
