import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const PresonalProjectModal = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <div>
      <Modal show={show} size="3xl" onClose={onClose}>
        <Modal.Header className="text-center"> Dự án cá nhân </Modal.Header>
        <Modal.Body>
          <form>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Tên dự án
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Trường"
              />
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Link demo
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="abc"
              />
            </div>
            <div className="mt-10 flex justify-normal items-center">
              <label>Thời gian thực hiện </label>
              <div className="flex items-center ml-5 ">
                <div className="border-b-2 border-gray-300 flex flex-col relative">
                  <span className="absolute top-0 right-1/2 transform -translate-y-1/2 text-red-500">
                    Start Date
                  </span>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border-gray-300 border-hidden"
                  />
                </div>
                <span className="mx-2">to</span>
                <div className="border-b-2 border-gray-300 flex flex-col relative">
                  <span className="absolute top-0 right-1/2 transform -translate-y-1/2 text-red-500">
                    Start Date
                  </span>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border-gray-300 border-hidden"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <label>thông tin làm việc </label>
              <textarea cols={6} rows={8}></textarea>
            </div>
          </form>
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

export default PresonalProjectModal;
