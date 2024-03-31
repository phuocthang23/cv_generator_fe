import { Button, Modal, Spinner } from "flowbite-react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { generateToken } from "../../utils/generateToken.utils";
import { candidatesDetail } from "../../service/candidateService/candidateDetail.service";
import { updateCandidateService } from "../../service/candidateService/updateCandidate.service";
import { formatDay } from "../../utils/convertDay";
const PersonalInfo = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const { handleSave } = updateCandidateService();
  const dataToken: any = generateToken();
  const candidateId = (dataToken as any).id;
  const dataCandidate: any = candidatesDetail({ id: candidateId });
  const [name, setName] = useState(dataCandidate?.name);
  const [email, setEmail] = useState(dataCandidate?.email);
  const [phone, setPhone] = useState(dataCandidate?.phone);
  const [dob, setDob] = useState(dataCandidate?.dob);
  const [gender, setGender] = useState(dataCandidate?.gender);
  const [address, setAddress] = useState(dataCandidate?.address);
  const [avatar, setAvatar] = useState<any>(null);
  const [link_fb, setLink_fb] = useState(dataCandidate?.link_fb);

  const [status, setStats] = useState(false);

  useEffect(() => {
    setName(dataCandidate?.name);
    setEmail(dataCandidate?.email);
    setPhone(dataCandidate?.phone);
    setDob(dataCandidate?.dob);
    setAddress(dataCandidate?.address);
    setGender(dataCandidate?.gender);
    setLink_fb(dataCandidate?.link_fb);
  }, [dataCandidate]);

  const body = {
    name,
    email,
    phone,
    dob: formatDay(dob),
    address,
    gender,
    avatar,
    link_fb,
  };

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const handleClose = () => {
    setName(dataCandidate.name);
    setEmail(dataCandidate.email);
    setPhone(dataCandidate.phone);
    setDob(dataCandidate.dob);
    setGender(dataCandidate.gender);
    setAddress(dataCandidate.address);
    setLink_fb(dataCandidate.link_fb);
    onClose();
  };

  const handleClickSave = async () => {
    setStats(true);
    try {
      const formData = new FormData();
      for (let i of Object.entries(body)) formData.append(i[0], i[1]);
      const response = await handleSave(candidateId, formData);
      console.log(response);
      onClose();
    } catch (error) {
      return;
    } finally {
      setStats(false);
    }
  };

  return (
    <div>
      <Modal show={show} onClose={handleClose}>
        <p className="text-center text-2xl p-4"> Cập nhập thông tin cá nhân </p>
        <Modal.Body>
          <div>
            {status && <Spinner aria-label="Default status example" />}
            <img
              src={dataCandidate?.avatar}
              alt=""
              className="mx-auto w-[100px]"
            />
            <div className="flex justify-center items-center">
              <input
                type="file"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files && event.target.files.length > 0) {
                    setAvatar(event.target.files[0]);
                  }
                }}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
              <button className="cursor-pointer px-3 py-4">
                <FaRegTrashAlt className="mx-auto" /> xóa
              </button>
            </div>
          </div>
          {/* name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Họ và tên
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/* chức danh */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              chức danh
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/* address */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Địa chỉ
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/* email */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/* Sdt */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              SĐT
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/* dob */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              BOD
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/* gender */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Giới tính
            </label>
            <select
              defaultValue={gender}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value={0}>Nam</option>
              <option value={1}>Nữ</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Trang cá nhân
            </label>
            <input
              type="text"
              value={link_fb}
              onChange={(e) => setLink_fb(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClickSave}>Cập Nhật</Button>
          <Button color="gray" onClick={handleClose}>
            Hủy Bỏ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PersonalInfo;
