import Caurousel from "../../../components/carousel/Caurousel";
import Company from "../../../components/company/Company";
import Outstanding from "../../../components/outstanding/Outstanding";

const homePage = () => {
  return (
    <div>
      <Outstanding />
      <Company />
      <Caurousel />
    </div>
  );
};

export default homePage;
