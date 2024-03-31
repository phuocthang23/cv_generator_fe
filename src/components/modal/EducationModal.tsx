import { Button, Modal } from "flowbite-react";
import { eduCandidateService } from "../../service/candidateService/eduCandidate.service";
import { formatDay } from "../../utils/convertDay";
import { useEffect } from "react";
import { toast } from "react-toastify";
interface IntroduceModalProps {
  show: boolean;
  onClose: () => void;
  isUpdateMode: boolean;
  initialValue: any;
}
const EducationModal = ({
  show,
  onClose,
  isUpdateMode,
  initialValue,
}: IntroduceModalProps) => {
  const {
    handleSave,
    name,
    major,
    setName,
    setMajor,
    started_at,
    end_at,
    info,
    setStarted_at,
    setEnd_at,
    setInfo,
    handleUpdate,
  } = eduCandidateService();

  useEffect(() => {
    setName(isUpdateMode ? initialValue.name : "");
    setMajor(isUpdateMode ? initialValue.major : "");
    setStarted_at(isUpdateMode ? initialValue.started_at : "");
    setEnd_at(isUpdateMode ? initialValue.end_at : "");
    setInfo(isUpdateMode ? initialValue.info : "");
  }, [show]);

  const onClickClose = () => {
    if (isUpdateMode) {
      setName(initialValue.name);
      setMajor(initialValue.major);
      setStarted_at(initialValue.started_at);
      setEnd_at(initialValue.end_at);
      setInfo(initialValue.info);
      onClose();
    } else {
      setName("");
      setMajor("");
      setStarted_at("");
      setEnd_at("");
      setInfo("");
      onClose();
    }
  };

  const onClickSave = async () => {
    if (isUpdateMode) {
      const res = await handleUpdate(initialValue.id, {
        name,
        major,
        started_at,
        end_at,
        info,
      });
      if (res?.status === 200) {
        toast.success("Đã cập nhật");
      } else {
        toast.error("Đã xảy ra lỗi không cập nhật  được");
      }
      onClose();
    } else {
      const res = await handleSave({
        name,
        major,
        started_at: formatDay(started_at),
        end_at: formatDay(end_at),
        info,
      });
      if (res?.status === 201) {
        toast.success("Tạo thành công");
        setName("");
        setMajor("");
        setStarted_at("");
        setEnd_at("");
        setInfo("");
        onClose();
      } else if (res?.status === 400) {
        toast.warning("vui lòng điền đầy đủ thông tin");
      } else {
        toast.error("Đã xảy ra lỗi ko tạo được");
      }
    }
  };

  return (
    <div>
      <Modal show={show} size="3xl" onClose={onClose}>
        <Modal.Header className="text-center">Học vấn </Modal.Header>
        <Modal.Body>
          <form>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Trường
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Trường"
              />
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Ngành Học
              </label>
              <input
                type="text"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="abc"
              />
            </div>
            <div className="mt-10 flex justify-normal items-center">
              <label>Thời gian học tập</label>
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
              <label>thông tin thêm </label>
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
            {isUpdateMode ? "Cập nhật" : "Tạo"}
          </Button>
          <Button color="gray" onClick={onClickClose}>
            Hủy Bỏ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EducationModal;
