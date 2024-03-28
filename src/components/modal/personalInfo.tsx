import { Button, Modal } from "flowbite-react";
import { FaImage, FaRegTrashAlt } from "react-icons/fa";
import fpt from "../../assets/Social icon.png";
import { useState } from "react";

const PersonalInfo = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <Modal show={show} onClose={onClose}>
        <p className="text-center text-2xl"> Cập nhập thông tin cá nhân </p>
        <Modal.Body>
          <div>
            <img src={fpt} alt="" className="mx-auto" />
            <div className="flex justify-center items-center">
              <button className="cursor-pointer px-3 py-4">
                <FaImage /> chỉnh sửa
              </button>
              <button className="cursor-pointer px-3 py-4">
                <FaRegTrashAlt /> xóa
              </button>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Họ và tên
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              chức danh
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Địa chỉ
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              SĐT
            </label>
            <input
              type="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              BOD
            </label>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Giới tính
            </label>
            <select
              defaultValue={selectedOption}
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>Cập Nhật</Button>
          <Button color="gray" onClick={onClose}>
            Hủy Bỏ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PersonalInfo;
