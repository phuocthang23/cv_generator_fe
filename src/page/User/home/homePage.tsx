import Caurousel from "../../../components/carousel/Caurousel";
import Company from "../../../components/company/Company";
import CompanyOutstanding from "../../../components/companyOutstanding/CompanyOutstanding";
import Banner from "../../../components/banner";
import CandidateOutstanding from "../../../components/candidateOutstanding/CandidateOutstanding";
import { generateToken } from "../../../utils/generateToken.utils";
import { tokenType } from "../../../types/token";

const homePage = () => {
  const token: any = generateToken() as tokenType | null;
  return (
    <div>
      <Banner />
      {token.role === "candidates" ? (
        <CompanyOutstanding />
      ) : (
        <CandidateOutstanding />
      )}
      <Company />
      <Caurousel />
    </div>
  );
};

export default homePage;
