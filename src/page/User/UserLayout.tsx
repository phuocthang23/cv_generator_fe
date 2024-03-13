import { Outlet } from "react-router-dom";
import Header from "../../layouts/header/header";
import Footer from "../../layouts/footer/footer";

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
