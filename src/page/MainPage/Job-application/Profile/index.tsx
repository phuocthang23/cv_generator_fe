import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import cv from "../../../../assets/cv.png";

import "./index.scss";
import { useState } from "react";
import { generateToken } from "../../../../utils/generateToken.utils";
import { candidatesDetail } from "../../../../service/candidateService/candidateDetail.service";
import { formatDay } from "../../../../utils/convertDay";
import { deleteIntroCandidateService } from "../../../../service/candidateService/introCandidate.service";
import { expCandidateService } from "../../../../service/candidateService/expCandidate.service";
import { eduCandidateService } from "../../../../service/candidateService/eduCandidate.service";
import { projectCandidateService } from "../../../../service/candidateService/candidateProject.service";
import { certificateCandidateService } from "../../../../service/candidateService/candidateCertificate.service";
import { skillCandidateService } from "../../../../service/candidateService/candidateSkill.service";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalInfo from "../../../../components/modal/personalInfo";
import IntroduceModal from "../../../../components/modal/IntroduceModal";
import EducationModal from "../../../../components/modal/EducationModal";
import ExpModal from "../../../../components/modal/ExpModal";
import Skill from "../../../../components/modal/Skill";
import PresonalProjectModal from "../../../../components/modal/PresonalProjectModal";
import Certificate from "../../../../components/modal/Certificate";

const ProfileCV = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showEdu, setShowEdu] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  // test
  const [isUpdate, setIsUpdate] = useState(false);
  const [initialValue, setInitialValue] = useState<any>("");

  const dataToken: any = generateToken();
  const candidateId = (dataToken as any).id;
  const dataCandidate: any = candidatesDetail({ id: candidateId });
  const introduceCandidates = dataCandidate.introduceCandidates;
  const educationCandidates = dataCandidate.educationCandidates;
  const experienceCandidates = dataCandidate.experienceCandidates;
  const skillCandidates = dataCandidate.skillCandidates;
  const projectCandidates = dataCandidate.projectCandidates;
  const certificateCandidates = dataCandidate.certificateCandidates;

  const { handleDelete } = deleteIntroCandidateService();
  const { handleDeleteExp } = expCandidateService();
  const { handleDeleteEdu } = eduCandidateService();
  const { handleDeleteProject } = projectCandidateService();
  const { handleDeleteCertificate } = certificateCandidateService();
  const { handleDeleteSkill } = skillCandidateService();

  const handleIntroUpdate = (id: any, description: any) => {
    setIsUpdate(true);
    setInitialValue({ id, description });
    setShowIntro(true);
  };

  const handleEduUpdate = (
    id: any,
    name: any,
    major: any,
    started_at: any,
    end_at: any,
    info: any
  ) => {
    setIsUpdate(true);
    setInitialValue({ id, name, major, started_at, end_at, info });
    setShowEdu(true);
  };

  const handleExpUpdate = (
    id: any,
    company: any,
    position: any,
    started_at: any,
    end_at: any,
    info: any
  ) => {
    setIsUpdate(true);
    setInitialValue({ id, company, position, started_at, end_at, info });
    setShowExp(true);
  };

  const handleSkillUpdate = (id: any, name: any, level_job_id: any) => {
    setIsUpdate(true);
    setInitialValue({ id, name, level_job_id });
    setShowSkill(true);
  };

  const handleProjectUpdate = (
    id: any,
    name: any,
    link: any,
    started_at: any,
    end_at: any,
    info: any
  ) => {
    setIsUpdate(true);
    setInitialValue({ id, name, link, started_at, end_at, info });
    setShowProject(true);
  };

  const handleCertificateUpdate = (
    id: any,
    name: any,
    organization: any,
    started_at: any,
    end_at: any,
    info: any
  ) => {
    setIsUpdate(true);
    setInitialValue({ id, name, organization, started_at, end_at, info });
    setShowCertificate(true);
  };

  return (
    <div className="mt-5 max-w-[1320px] mx-auto">
      <div className="main flex">
        <div className="left-block py-5 px-[30px] max-w-[534px] bg-white border rounded-lg">
          <h1 className="text-xl font-bold mb-[30px]">
            Nâng cấp hồ sơ xin việc của bạn bằng việc bổ sung các trường sau
          </h1>
          <div className="container border-y">
            <ul>
              <li className="py-4">
                <button className="text-red-700 flex text-xl items-center">
                  <CiCirclePlus className="mr-6" /> Thêm giới thiệu bản thân
                </button>
              </li>
              <li className="py-4 mt-[30px]">
                <button className="text-red-700 flex text-xl items-center">
                  <CiCirclePlus className="mr-6" /> Thêm giới thiệu bản thân
                </button>
              </li>
              <li className="py-4 mt-[30px]">
                <button className="text-red-700 flex text-xl items-center">
                  <CiCirclePlus className="mr-6" /> Thêm giới thiệu bản thân
                </button>
              </li>
              <li className="py-4 mt-[30px]">
                <button className="text-red-700 flex text-xl items-center">
                  <CiCirclePlus className="mr-6" /> Thêm giới thiệu bản thân
                </button>
              </li>
              <li className="py-4 mt-[30px]">
                <button className=" flex text-xl items-center">
                  <IoIosArrowDown className="mr-6" /> Thêm thông tin khác
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-[30px]">
            <p className="flex">
              <img className="mr-[10px]" src={cv} alt="" />
              <span className="text-xl font-bold">
                Nâng cấp hồ sơ xin việc của bạn bằng việc bổ sung các trường sau
              </span>
            </p>
            <button className="px-[67px] py-4 bg-red-700 text-white rounded mt-[30px] mx-auto flex">
              Xem và Tải CV
            </button>
          </div>
        </div>
        <div className="right-block w-[826px]">
          {/* profile */}
          <div className=" w-full ml-[30px] p-5 bg-white border rounded-lg flex relative mb-[50px]">
            <button
              className="text-red-700 absolute top-5 right-[68px] "
              onClick={() => setShowProfile(true)}
            >
              <IoCreateOutline className="text-xl" />
            </button>
            <PersonalInfo
              show={showProfile}
              onClose={() => setShowProfile(false)}
            />
            <div className="mr-5">
              <img src={dataCandidate.avatar} className="w-[100px]" alt="" />
            </div>
            <div>
              <div className="px-6 py-[18px]">
                <p className="text-2xl font-bold">{dataCandidate.name}</p>
                <p className="text-[#767F8C] text-sm">Full-stack Developer</p>
                <div className="mt-4 grid gap-4 grid-cols-2 text-[#767F8C]">
                  <p className="flex items-center w-[216px]">
                    <MdOutlineMailOutline className="mr-2" />{" "}
                    {dataCandidate.email}
                  </p>
                  <p className="flex items-center w-[216px]">
                    <FaPhone className="mr-2" /> {dataCandidate.phone}
                  </p>
                  <p className="flex items-center w-[216px]">
                    <FaBirthdayCake className="mr-2" /> {dataCandidate.dob}
                  </p>
                  <p className="flex items-center w-[216px]">
                    <FaRegUserCircle className="mr-2" />{" "}
                    {dataCandidate.gender !== 1 ? "Nam" : "Nữ"}
                  </p>
                  <p className="flex items-center w-[216px]">
                    <FiMapPin className="mr-2" /> {dataCandidate.address}
                  </p>
                  <p className="flex items-center w-[216px] text-xs text-wrap">
                    <TbWorld className="mr-2 w-4 h-4" />{" "}
                    {dataCandidate.link_fb === null
                      ? "Trang cá nhân : Không có"
                      : dataCandidate.link_fb}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* introduce */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => {
                setShowIntro(true), setIsUpdate(false);
              }}
            >
              <CiCirclePlus className="text-xl" />
            </button>
            <IntroduceModal
              show={showIntro}
              onClose={() => setShowIntro(false)}
              isUpdateMode={isUpdate}
              initialValue={initialValue}
            />
            <p className="text-2xl font-bold mb-[22px] border-b-2 pb-3 border-gray-600">
              Giới thiệu bản thân
            </p>
            {introduceCandidates && introduceCandidates.length === 0 ? (
              <p className="text-[#767F8C]">
                Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
              </p>
            ) : (
              introduceCandidates?.map((item: any, index: any) => (
                <ul
                  key={index}
                  className="list-disc list-inside pl-[30px] flex justify-between"
                >
                  <li className="text-[#767F8C]">{item.description}</li>
                  <div>
                    <button
                      className="mr-5"
                      onClick={() =>
                        handleIntroUpdate(item.id, item.description)
                      }
                    >
                      <IoCreateOutline />
                    </button>
                    <button
                      className="text-red-700"
                      onClick={() => handleDelete(item.id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </ul>
              ))
            )}
          </div>
          {/* education */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => {
                setShowEdu(true), setIsUpdate(false);
              }}
            >
              <CiCirclePlus className="text-xl" />
            </button>

            <EducationModal
              show={showEdu}
              onClose={() => setShowEdu(false)}
              isUpdateMode={isUpdate}
              initialValue={initialValue}
            />

            <p className="text-2xl font-bold mb-[22px] border-b-2 pb-3 border-gray-600">
              Học vấn
            </p>
            {educationCandidates?.length === 0 ? (
              <p className="text-[#767F8C]">
                Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
              </p>
            ) : (
              educationCandidates?.map((item: any, index: any) => (
                <div
                  key={index}
                  className=" pl-[20px] flex justify-between items-center "
                >
                  <div
                    className={`text-[#767F8C]  border-blue-gray-800 py-2 w-[80%] break-words ${
                      index === educationCandidates.length - 1
                        ? "last:border-none"
                        : "border-b-2"
                    }`}
                  >
                    <p className="text-black font-bold font-inter text-xl ">
                      {item.name}
                    </p>{" "}
                    <p>{item.major}</p>
                    {formatDay(item.started_at)} - {formatDay(item.end_at)}
                    <p className="  text-wrap">{item.info}</p>
                  </div>

                  <div>
                    <button
                      className="mr-5"
                      onClick={() =>
                        handleEduUpdate(
                          item.id,
                          item.name,
                          item.major,
                          item.started_at,
                          item.end_at,
                          item.info
                        )
                      }
                    >
                      <IoCreateOutline />
                    </button>
                    <button
                      className="text-red-700"
                      onClick={() => handleDeleteEdu(item.id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* experience */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => {
                setShowExp(true), setIsUpdate(false);
              }}
            >
              <CiCirclePlus className="text-xl" />
            </button>
            <ExpModal
              show={showExp}
              onClose={() => setShowExp(false)}
              isUpdateMode={isUpdate}
              initialValue={initialValue}
            />

            <p className="text-2xl font-bold mb-[22px] border-b-2 pb-3 border-gray-600">
              Kinh nghiệm làm việc
            </p>
            {experienceCandidates?.length === 0 ? (
              <p className="text-[#767F8C]">
                Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
              </p>
            ) : (
              experienceCandidates?.map((item: any, index: any) => (
                <div key={index} className=" pl-[20px] flex justify-between">
                  <div
                    className={`text-[#767F8C]  border-blue-gray-800 py-2 w-[80%] break-words ${
                      index === experienceCandidates.length - 1
                        ? "last:border-none"
                        : "border-b-2"
                    }`}
                  >
                    <p className="text-black font-bold font-inter text-xl ">
                      {item.position}
                    </p>{" "}
                    {item.company} - ({formatDay(item.started_at)} -{" "}
                    {formatDay(item.end_at)})<p>{item.info}</p>
                  </div>
                  <div>
                    <button
                      className="mr-5"
                      onClick={() =>
                        handleExpUpdate(
                          item.id,
                          item.company,
                          item.position,
                          item.started_at,
                          item.end_at,
                          item.info
                        )
                      }
                    >
                      <IoCreateOutline />
                    </button>
                    <button
                      className="text-red-700"
                      onClick={() => handleDeleteExp(item.id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* skill */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => {
                setShowSkill(true), setIsUpdate(false);
              }}
            >
              <IoCreateOutline className="text-xl" />
            </button>
            <Skill
              show={showSkill}
              onClose={() => setShowSkill(false)}
              isUpdateMode={isUpdate}
              initialValue={initialValue}
            />
            <p className="text-2xl font-bold mb-[22px] border-b-2 pb-3 border-gray-600">
              Kỹ năng
            </p>
            {skillCandidates?.length === 0 ? (
              <p className="text-[#767F8C]">
                Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
              </p>
            ) : (
              skillCandidates?.map((item: any, index: any) => (
                <ul
                  key={index}
                  className="list-disc list-inside pl-[30px] flex justify-between"
                >
                  <li className="text-[#767F8C]">
                    {item.name} -{" "}
                    {item.level_job_id === "1"
                      ? "Mới bắt đầu"
                      : item.level_job_id === "2"
                      ? "Trung bình"
                      : item.level_job_id === "3"
                      ? "Thành thạo"
                      : "Không xác định"}
                  </li>
                  <div>
                    <button
                      className="mr-5"
                      onClick={() =>
                        handleSkillUpdate(item.id, item.name, item.level_job_id)
                      }
                    >
                      <IoCreateOutline />
                    </button>
                    <button
                      className="text-red-700"
                      onClick={() => handleDeleteSkill(item.id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </ul>
              ))
            )}
          </div>
          {/* project */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => {
                setShowProject(true), setIsUpdate(false);
              }}
            >
              <CiCirclePlus className="text-xl" />
            </button>
            <PresonalProjectModal
              show={showProject}
              onClose={() => setShowProject(false)}
              isUpdateMode={isUpdate}
              initialValue={initialValue}
            />
            <p className="text-2xl font-bold mb-[22px] border-b">
              Dự án Cá Nhân
            </p>
            {projectCandidates?.lenght === 0 ? (
              <p className="text-[#767F8C] flex justify-between">
                <span>Hiện tại</span>
                <span className="text-red-700 text-xl">
                  <button className="mr-5">
                    <IoCreateOutline />
                  </button>
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                </span>
              </p>
            ) : (
              projectCandidates?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="text-[#767F8C] flex justify-between"
                >
                  <div
                    className={`text-[#767F8C]  border-blue-gray-800 py-2 w-[80%] break-words ${
                      index === experienceCandidates.length - 1
                        ? "last:border-none"
                        : "border-b-2"
                    }`}
                  >
                    <div className="text-black font-bold font-inter text-lg">
                      {item.name} - ({formatDay(item.started_at)} -{" "}
                      {formatDay(item.end_at)})
                    </div>
                    <div>thông tin :{item.info}</div>
                    <div>Link: {item.link}</div>
                  </div>

                  <span className="text-red-700 text-xl">
                    <button
                      className="mr-5"
                      onClick={() =>
                        handleProjectUpdate(
                          item.id,
                          item.name,
                          item.link,
                          item.started_at,
                          item.end_at,
                          item.info
                        )
                      }
                    >
                      <IoCreateOutline />
                    </button>
                    <button onClick={() => handleDeleteProject(item.id)}>
                      <RiDeleteBin6Line />
                    </button>
                  </span>
                </div>
              ))
            )}
          </div>
          {/* certificate */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => {
                setShowCertificate(true), setIsUpdate(false);
              }}
            >
              <CiCirclePlus className="text-xl" />
            </button>
            <Certificate
              show={showCertificate}
              onClose={() => setShowCertificate(false)}
              isUpdateMode={isUpdate}
              initialValue={initialValue}
            />
            <p className="text-2xl font-bold mb-[22px]">Chứng chỉ</p>
            {certificateCandidates?.length === 0 ? (
              <p className="text-[#767F8C]">
                Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
              </p>
            ) : (
              certificateCandidates?.map((item: any, index: any) => (
                <div key={index} className=" pl-[20px] flex justify-between">
                  <div
                    className={`text-[#767F8C]  border-blue-gray-800 py-2 w-[80%] break-words ${
                      index === experienceCandidates.length - 1
                        ? "last:border-none"
                        : "border-b-2"
                    }`}
                  >
                    <div className="text-black font-bold font-inter text-lg">
                      {item.name} -{item.organization}
                    </div>
                    {formatDay(item.started_at)} - {formatDay(item.end_at)}-{" "}
                    <div>{item.info}</div>
                  </div>
                  <div>
                    <button
                      className="mr-5"
                      onClick={() =>
                        handleCertificateUpdate(
                          item.id,
                          item.name,
                          item.organization,
                          item.started_at,
                          item.end_at,
                          item.info
                        )
                      }
                    >
                      <IoCreateOutline />
                    </button>
                    <button
                      className="text-red-700"
                      onClick={() => handleDeleteCertificate(item.id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfileCV;
