import { Outlet } from "react-router-dom";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import SubHeader from "../../layouts/subHeader";

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
