import Caurousel from "../../../components/carousel/Caurousel";
import Company from "../../../components/company/Company";
import Outstanding from "../../../components/outstanding/Outstanding";
import Banner from "../../../components/banner";

const homePage = () => {
  return (
    <div>
      <Banner />
      <Outstanding />
      <Company />
      <Caurousel />
    </div>
  );
};

export default homePage;
