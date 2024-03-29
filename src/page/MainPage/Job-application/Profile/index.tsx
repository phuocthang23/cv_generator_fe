import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../../../assets/logo.png";
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
import IntroduceModal from "../../../../components/modal/IntroduceModal";
import EducationModal from "../../../../components/modal/EducationModal";
import ExpModal from "../../../../components/modal/ExpModal";
import PresonalProjectModal from "../../../../components/modal/PresonalProjectModal";
import Certificate from "../../../../components/modal/Certificate";
import PersonalInfo from "../../../../components/modal/personalInfo";
import Skill from "../../../../components/modal/Skill";

const ProfileCV = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showEdu, setShowEdu] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSkill, setShowSkill] = useState(false);

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
          <div className=" w-full ml-[30px] py-5 bg-white border rounded-lg flex relative mb-[50px]">
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
              <img src={logo} alt="" />
            </div>
            <div>
              <div className="px-6 py-[18px]">
                <p className="text-2xl font-bold">Nguyễn Minh Dương</p>
                <p className="text-[#767F8C] text-sm">Full-stack Developer</p>
                <div className="mt-4 grid gap-4 grid-cols-2 text-[#767F8C]">
                  <p className="flex items-center w-[216px]">
                    <MdOutlineMailOutline className="mr-2" /> abc@gmail.com
                  </p>
                  <p className="flex items-center w-[216px]">
                    <FaPhone className="mr-2" /> 8/3/2023
                  </p>
                  <p className="flex items-center w-[216px]">
                    <FaBirthdayCake className="mr-2" /> 8/3/2023
                  </p>
                  <p className="flex items-center w-[216px]">
                    <FaRegUserCircle className="mr-2" /> Giới tính
                  </p>
                  <p className="flex items-center w-[216px]">
                    <FiMapPin className="mr-2" /> Địa chỉ hiện tại
                  </p>
                  <p className="flex items-center w-[216px]">
                    <TbWorld className="mr-2" /> Trang cá nhân
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* introduce */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => setShowIntro(true)}
            >
              <CiCirclePlus className="text-xl" />
            </button>
            <IntroduceModal
              show={showIntro}
              onClose={() => setShowIntro(false)}
            />
            <p className="text-2xl font-bold mb-[22px]">Giới thiệu bản thân</p>
            <p className="text-[#767F8C]">
              Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
            </p>
          </div>
          {/* education */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => setShowEdu(true)}
            >
              <CiCirclePlus className="text-xl" />
            </button>

            <EducationModal show={showEdu} onClose={() => setShowEdu(false)} />

            <p className="text-2xl font-bold mb-[22px]">Học vấn</p>
            <p className="text-[#767F8C]">
              Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
            </p>
          </div>
          {/* experience */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => setShowExp(true)}
            >
              <CiCirclePlus className="text-xl" />
            </button>
            <ExpModal show={showExp} onClose={() => setShowExp(false)} />

            <p className="text-2xl font-bold mb-[22px]">Kinh nghiệm làm việc</p>
            <p className="text-[#767F8C]">
              Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
            </p>
          </div>
          {/* skill */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => setShowSkill(true)}
            >
              <IoCreateOutline className="text-xl" />
            </button>
            <Skill show={showSkill} onClose={() => setShowSkill(false)} />
            <p className="text-2xl font-bold mb-[22px]">Kỹ năng</p>
            <p className="text-[#767F8C]">
              Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
            </p>
          </div>
          {/* project */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => setShowProject(true)}
            >
              <CiCirclePlus className="text-xl" />
            </button>
            <PresonalProjectModal
              show={showProject}
              onClose={() => setShowProject(false)}
            />
            <p className="text-2xl font-bold mb-[22px] border-b">
              Dự án Cá Nhân
            </p>
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
          </div>
          {/* certificate */}
          <div className=" w-full ml-[30px] py-5 px-[30px] mb-[50px] bg-white border rounded-lg relative">
            <button
              className="text-red-700 absolute top-5 right-[68px]"
              onClick={() => setShowCertificate(true)}
            >
              <CiCirclePlus className="text-xl" />
            </button>
            <Certificate
              show={showCertificate}
              onClose={() => setShowCertificate(false)}
            />
            <p className="text-2xl font-bold mb-[22px]">Chứng chỉ</p>
            <p className="text-[#767F8C]">
              Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCV;
