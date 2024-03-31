import logo from "../../../assets/logo.png";
import group from "../../../assets/Group.png";
import Frame from "../../../assets/Frame 709.png";
import location from "../../../assets/location.circle.png";
import MapTrifold from "../../../assets/MapTrifold.png";
import LinkSimple from "../../../assets/LinkSimple.png";
import Social1 from "../../../assets/Social icon (1).png";
import Social2 from "../../../assets/Social icon (2).png";
import Social from "../../../assets/Social icon.png";
import Envelope from "../../../assets/Envelope.png";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../../../components/breadCrumb/BreadCrumb";
import { candidatesDetail } from "../../../service/candidateService/candidateDetail.service";
const CandidateDetail = () => {
  const param = useParams();
  const dataCandidates = candidatesDetail(param);
  return (
    <div>
      <BreadCrumb />
      <div className="main max-w-[1320px] mx-auto ">
        <div className=" heading mx-auto mt-[35.5px] flex justify-between">
          <div className="flex items-center">
            <img className="w-[96px] mr-6" src={logo} alt="" />
            <div className="heading ">
              <p className="text-2xl">{dataCandidates.name}</p>
              {dataCandidates &&
                dataCandidates?.skillCandidates?.map(
                  (item: any, index: number) => {
                    return (
                      <span key={index} className="text-[13px]  mt-3 address">
                        <span className="mx-2 text-[#fff] itag">
                          {item.name}
                        </span>{" "}
                      </span>
                    );
                  }
                )}
              <span className="featured text-[#0A65CC] bg-[#E7F0FA]">
                Fresher
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="mr-3 bg-red-300 text-red-700 p-4 rounded">
              <img src={group} alt="" />
            </button>
            <button className="text-base flex items-center bg-red-700 text-white px-[42px] py-4 rounded">
              <span className="mr-3">Đặt lịch phỏng vấn</span>
            </button>
          </div>
        </div>
        <div className="container mt-8 flex">
          <div className="left-ctn max-w-[760px] ">
            <p className="text-it-black text-lg text-black ">
              <b>Mô tả bản thân</b>
            </p>
            {dataCandidates?.introduceCandidates?.map(
              (item: any, index: number) => {
                return <span key={index}>{item.description}</span>;
              }
            )}
            <div className="requirements">
              <b className=" block text-black mt-4">Kinh nghiệm làm việc</b>
              <ul className="ml-6">
                {dataCandidates?.experienceCandidates?.map(
                  (item: any, index: number) => {
                    return <li key={index}>{item.position}</li>;
                  }
                )}
              </ul>
            </div>
            <div className="desirable">
              <b className=" block text-black mt-4">Định hướng phát triển</b>
              <ul className="ml-6">
                <li>
                  Working knowledge of eCommerce platforms, ideally Shopify but
                  also others e.g. Magento, WooCommerce, Visualsoft to enable
                  seamless migrations.
                </li>
                <li>Working knowledge of payment gateways</li>
                <li>API platform experience / Building restful APIs</li>
              </ul>
            </div>
          </div>
          <div className="right-ctn w-[536px]   ml-6">
            <div className=" flex pt-[9px] py-8 pl-[25px] border border-collapse ml-6 rounded-lg">
              <div>
                <div className="flex items-center gap-2">
                  {" "}
                  <img src={location} alt="" />{" "}
                  <p className="font-semibold">Địa chỉ cá nhân</p>
                </div>
                <p>{dataCandidates.address}</p>
              </div>
            </div>
            <div className=" flex pt-[9px] py-8 pl-[25px] border border-collapse ml-6 rounded-t-lg mt-8">
              <div className="">
                <div>
                  <div className="flex items-center gap-2  ">
                    <img src={MapTrifold} className="w-5 h-5" alt="" />{" "}
                    <p className="font-semibold">Kỹ năng</p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <p>Technical:</p>
                    {dataCandidates?.skillCandidates?.map(
                      (item: any, index: number) => {
                        return (
                          <span
                            key={index}
                            className="text-sm text-[#0BA02C] bg-[#E7F6EA] font-semibold  px-1 py-[5px] rounded"
                          >
                            {item.name}
                          </span>
                        );
                      }
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <p>Language:</p>
                    <span className="text-sm text-[#F16A1B] bg-[#FCE1D1] font-semibold  px-1 py-[5px] rounded">
                      Japanese N2
                    </span>
                    <span className="text-sm text-[#3A57E8] bg-[#C4CCF8] font-semibold  px-1 py-[5px] rounded">
                      Toeic 700
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex pt-[9px] py-8 pl-[25px] border border-collapse ml-6 rounded-b-lg mt-8">
              <div className="">
                <p className="font-semibold text-lg mb-3">Thông tin cá nhân</p>
                <ul className="flex">
                  <li className="w-[147px]">
                    <Link
                      className=" p-[8px] rounded bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={LinkSimple} alt="" />{" "}
                      <span className="text-red-700">Copy Links</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-300 flex text-base"
                      to={dataCandidates.link_linkedin}
                    >
                      <img src={Social} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-700 flex text-base"
                      to={dataCandidates.fb}
                    >
                      <img src={Social1} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-300 flex text-base"
                      to={dataCandidates.fb}
                    >
                      <img src={Social2} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[8px] rounded ml-2 bg-red-300 flex text-base"
                      to={dataCandidates.link_git}
                    >
                      <img src={Envelope} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex pt-[9px] py-8 pl-[25px] border border-collapse ml-6 rounded-b-lg mt-8">
              <div className="">
                <img src={Frame} className="mt-3" alt="" />
                <button className="text-base flex items-center mx-auto bg-red-700 text-white px-[70px] py-4 rounded w-60">
                  <span className="">Truy cập CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-14 mb-52">
        <div className="border-collapse main max-w-[1320px] mx-auto pt-[100px]">
          {/* <h1 className="font-bold text-[40px] mb-[50px]">Related Jobs</h1> */}
          {/* <div className="grid gap-x-8 gap-y-4 grid-cols-3">
            {relatedJobs
              .filter(
                (item: any) =>
                  item.title
                    .toLowerCase()
                    .includes(dataJob.title.toLowerCase().split(" ")[0]) ||
                  item.title
                    .toLowerCase()
                    .includes(dataJob.title.toLowerCase().split(" ")[1])
              )
              .slice(0, 6)
              .map((item: any, index: number) => (
                <div className="border border-collapse rounded p-6" key={index}>
                  <p className="text-lg">
                    {item.title}
                    <p className="text-sm mt-2">
                      <span className="text-[#0BA02C] rounded bg-[#E7F6EA] px-2 py-1">
                        FULL-TIME
                      </span>{" "}
                      <span className="ml-4">
                        Salary: $ {item.salary.toLocaleString()}
                      </span>
                    </p>
                  </p>
                  <p className="mt-5 flex flex-row">
                    <span className=" basis-1/6">
                      <img src={EmployersLogo} />
                    </span>
                    <span className="mx-3 w-full">
                      {item.company?.name}.{" "}
                      <span className="flex">
                        {" "}
                        <img className="h-[18px]" src={MapPin} />
                        Dhaka, Bangladesh
                      </span>
                    </span>
                    <span className="basis-1/6">
                      <img src={BookmarkSimple} alt="" />
                    </span>
                  </p>
                </div>
              ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
