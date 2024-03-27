import logo from "../../../assets/logo.png";
import vector from "../../../assets/BookmarkSimple.png";
import MapTrifold from "../../../assets/MapTrifold.png";
import CalendarBlank from "../../../assets/CalendarBlank.png";
import Timer from "../../../assets/Timer.png";
import Stack from "../../../assets/Stack.png";
import Wallet from "../../../assets/Wallet.png";
import Briefcase from "../../../assets/briefcase.png";
import LinkSimple from "../../../assets/LinkSimple.png";
import Social1 from "../../../assets/Social icon (1).png";
import Social2 from "../../../assets/Social icon (2).png";
import Social from "../../../assets/Social icon.png";
import MapPin from "../../../assets/MapPin.png";
import Envelope from "../../../assets/Envelope.png";
import EmployersLogo from "../../../assets/Employers Logo.png";
import BookmarkSimple from "../../../assets/BookmarkSimple (1).png";
import { FaArrowRight } from "react-icons/fa";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import { jobDetail } from "../../../service/jobService/jobDetail.service";
import BreadCrumb from "../../../components/breadCrumb/BreadCrumb";
import { formatDay } from "../../../utils/convertDay";
const JobDetail = () => {
  const param = useParams();

  const { dataJob, relatedJobs } = jobDetail(param);
  return (
    <div>
      <BreadCrumb />
      <div className="main max-w-[1320px] mx-auto ">
        <div className=" heading mx-auto mt-[35.5px] flex justify-between">
          <div className="flex items-center">
            <img className="w-[96px] mr-6" src={logo} alt="" />
            <div className="heading ">
              <p className="text-2xl">{dataJob.title}</p>
              <p className="text-[18px] mt-3 address">
                at {dataJob.company?.name}
                <span className="mx-2 text-white itag">FULL-TIME</span>{" "}
                <span className="featured text-red-700">Featured</span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="mr-3 bg-red-300 text-red-700 p-4 rounded">
              <img src={vector} alt="" />
            </button>
            <button className="text-base flex items-center bg-red-700 text-white px-[42px] py-4 rounded">
              <span className="mr-3">Ứng tuyển Ngay</span> <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="container mt-8 flex">
          <div className="left-ctn max-w-[760px] ">
            <p className="text-it-black text-lg text-black ">
              <b> Job Description</b>
            </p>
            <p className="mt-4 text-base">
              <span className="block mb-4">{dataJob.description}</span>
              <span>Want to work with us? You're in good company!</span>
            </p>
            <div className="requirements">
              <b className=" block text-black mt-4">Requirements</b>
              <ul className="ml-6">
                <li>
                  Great troubleshooting and analytical skills combined with the
                  desire to tackle challenges head-on
                </li>
                <li>
                  3+ years of experience in back-end development working either
                  with multiple smaller projects simultaneously or large-scale
                  applications
                </li>
                <li>
                  Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                  Laravel
                </li>
                <li>
                  Working regularly with APIs and Web Services (REST, GrapthQL,
                  SOAP, etc)
                </li>
                <li>
                  Have experience/awareness in Agile application development,
                  commercial off-the-shelf software, middleware, servers and
                  storage, and database management.
                </li>
                <li>
                  Familiarity with version control and project management
                  systems (e.g., Github, Jira)
                </li>
                <li>
                  Great troubleshooting and analytical skills combined with the
                  desire to tackle challenges head-on
                </li>
                <li>
                  Ambitious and hungry to grow your career in a fast-growing
                  agency
                </li>
              </ul>
            </div>
            <div className="desirable">
              <b className=" block text-black mt-4">Desirable:</b>
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
            <div className="benefits:">
              <b className=" block text-black mt-4">Benefits</b>
              <ul className="ml-6">
                <li>
                  Early finish on Fridays for our end of week catch up (4:30
                  finish, and drink of your choice from the bar)
                </li>
                <li>
                  28 days holiday (including bank holidays) rising by 1 day per
                  year PLUS an additional day off on your birthday
                </li>
                <li>Generous annual bonus.</li>
                <li>Healthcare package</li>
                <li>
                  Paid community days to volunteer for a charity of your choice
                </li>
                <li>
                  £100 contribution for your own personal learning and
                  development
                </li>
                <li>Free Breakfast on Mondays and free snacks in the office</li>
                <li>
                  Access to Perkbox with numerous discounts plus free points
                  from the company to spend as you wish.
                </li>
                <li>Cycle 2 Work Scheme</li>
                <li>Brand new MacBook Pro</li>
                <li>
                  Joining an agency on the cusp of exponential growth and being
                  part of this exciting story
                </li>
              </ul>
            </div>
          </div>
          <div className="right-ctn w-[536px] h-[160px]  ml-6">
            <div className=" flex p-8 border border-collapse ml-6 rounded-lg">
              <div className="money w-[50%] pr-8 border-r-2">
                <p className="font-medium text-center">Salary (USD)</p>
                <p className="text-xl text-light-green-700 my-3 text-center">
                  ${dataJob.salary}
                </p>
                <span className="text-ellipsis block text-center text-[#767F8C]">
                  Yearly salary
                </span>
              </div>
              <div className="money pl-8 w-[50%]">
                <p>
                  <img className="mx-auto" src={MapTrifold} alt="" />
                </p>
                <p className="font-medium text-center">Job Location</p>
                <span className="text-ellipsis block text-center text-[#767F8C]">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
            <div className=" flex px-8 py-6 border border-collapse ml-6 rounded-t-lg mt-8">
              <div className="">
                <p className="font-medium text-lg mb-5">Job Overview</p>
                <ul className="grid gap-x-8 gap-y-4 grid-cols-3">
                  <li>
                    <img src={CalendarBlank} alt="" />
                    <p className="text-xs text-[#767F8C]">Job Posted:</p>
                    <p className="text-ellipsis">
                      {formatDay(dataJob.createdAt)}
                    </p>
                  </li>
                  <li>
                    <img src={Timer} alt="" />
                    <p className="text-xs text-[#767F8C]">Job expire in:</p>
                    <p className="text-ellipsis">{dataJob.expire_at}</p>
                  </li>
                  <li>
                    <img src={Stack} alt="" />
                    <p className="text-xs text-[#767F8C]">Job Level:</p>
                    <p className="text-ellipsis">{dataJob.level}</p>
                  </li>
                  <li>
                    <img src={Wallet} alt="" />
                    <p className="text-xs text-[#767F8C]">Experience</p>
                    <p className="text-ellipsis">$50k-80k/month</p>
                  </li>
                  <li>
                    <img src={Briefcase} alt="" />
                    <p className="text-xs text-[#767F8C]">Education</p>
                    <p className="text-ellipsis">Graduation</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex px-8 py-6 border border-collapse ml-6 rounded-b-lg">
              <div className="">
                <p className="font-medium text-lg mb-5">Share this job:</p>
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
                      to="#"
                    >
                      <img src={Social} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-700 flex text-base"
                      to="#"
                    >
                      <img src={Social1} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={Social2} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[8px] rounded ml-2 bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={Envelope} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t-2 mt-14 mb-52">
        <div className="border-collapse main max-w-[1320px] mx-auto pt-[100px]">
          <h1 className="font-bold text-[40px] mb-[50px]">Related Jobs</h1>
          <div className="grid gap-x-8 gap-y-4 grid-cols-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
