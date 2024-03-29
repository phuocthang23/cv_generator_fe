import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const Skill = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const [selectedOption, setSelectedOption] = useState("0");
  const [selectedLv, setSelectedLv] = useState("0");
  return (
    <div>
      <Modal show={show} size="3xl" onClose={onClose}>
        <Modal.Header className="text-center">Kỹ năng </Modal.Header>
        <Modal.Body>
          <form className="flex justify-between  items-center">
            <section className="min-w-64">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="0" className="p-2">
                  Nhập kỹ năng
                </option>
                <option value="1" className="p-2">
                  Trung bình
                </option>
                <option value="2" className="p-2">
                  Trung bình kém
                </option>
                <option value="3" className="p-2">
                  Khá
                </option>
                <option value="4" className="p-2">
                  Tốt
                </option>
                <option value="5" className="p-2">
                  Xuất sắc
                </option>
              </select>
            </section>

            <section className="my-5 w-full max-w-64">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={selectedLv}
                onChange={(e) => setSelectedLv(e.target.value)}
              >
                <option value="1" className="p-2">
                  Thấp
                </option>
                <option value="1" className="p-2">
                  Thấp
                </option>
                <option value="2" className="p-2">
                  Trung bình
                </option>
                <option value="3" className="p-2">
                  Cao
                </option>
              </select>
            </section>

            <div className="flex justify-end">
              <Button
                color="white"
                className="p-2 font-semibold text-red-500 border-red-500 border-2"
              >
                thêm mới
              </Button>
            </div>
          </form>
          <div className="mt-5">
            <div>
              <div>
                <p>Thành thạo</p>
                <div className="flex items-center">
                  <div className="flex items-center border-2 border-[#E4E5E8] rounded-full px-2 py-2">
                    <p>kkkkkkk</p>
                    <TiDeleteOutline />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p>Trung bình</p>
                <div className="flex items-center">
                  <div className="flex items-center border-2 border-[#E4E5E8] rounded-full px-2 py-2">
                    <p>kkkkkkk</p>
                    <TiDeleteOutline />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p>Mới bắt đầu</p>
                <div className="flex items-center">
                  <div className="flex items-center border-2 border-[#E4E5E8] rounded-full px-2 py-2">
                    <p>kkkkkkk</p>
                    <TiDeleteOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose} color="failure">
            Cập Nhật
          </Button>
          <Button color="gray" onClick={onClose}>
            Hủy Bỏ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Skill;
