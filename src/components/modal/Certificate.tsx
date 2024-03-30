import { Button, Modal } from "flowbite-react";
import { certificateCandidateService } from "../../service/candidateService/candidateCertificate.service";
import { formatDay } from "../../utils/convertDay";

const Certificate = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const {
    handleSave,
    name,
    organization,
    setName,
    setOrganization,
    started_at,
    end_at,
    info,
    setStarted_at,
    setEnd_at,
    setInfo,
  } = certificateCandidateService();

  const onClickClose = () => {
    setName("");
    setOrganization("");
    setStarted_at("");
    setEnd_at("");
    setInfo("");
    onClose();
  };

  const onClickSave = async () => {
    await handleSave({
      name,
      organization,
      started_at: formatDay(started_at),
      end_at: formatDay(end_at),
      info,
    });
    setName("");
    setOrganization("");
    setStarted_at("");
    setEnd_at("");
    setInfo("");
    onClose();
  };

  return (
    <div>
      <Modal show={show} size="3xl" onClose={onClose}>
        <Modal.Header className="text-center"> Chứng Chỉ </Modal.Header>
        <Modal.Body>
          <form>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Tên chứng chỉ
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="abc"
              />
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Tổ chức
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="abc"
              />
            </div>
            <div className="mt-10 flex justify-normal items-center">
              <label>Thời gian </label>
              <div className="flex items-center ml-5 ">
                <div className="border-b-2 border-gray-300 flex flex-col relative">
                  <span className="absolute top-0 right-1/2 transform -translate-y-1/2 text-red-500">
                    Start Date
                  </span>
                  <input
                    type="date"
                    value={started_at}
                    onChange={(e) => setStarted_at(e.target.value)}
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
                    value={end_at}
                    onChange={(e) => setEnd_at(e.target.value)}
                    className="border-gray-300 border-hidden"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <label>Mô tả thêm</label>
              <textarea
                cols={6}
                rows={8}
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClickSave} color="failure">
            Cập Nhật
          </Button>
          <Button color="gray" onClick={onClickClose}>
            Hủy Bỏ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Certificate;
