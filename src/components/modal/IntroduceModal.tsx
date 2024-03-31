import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { introCandidateService } from "../../service/candidateService/introCandidate.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IntroduceModalProps {
  show: boolean;
  onClose: () => void;
  isUpdateMode: boolean;
  initialValue: any;
}
const IntroduceModal = ({
  show,
  onClose,
  isUpdateMode,
  initialValue,
}: IntroduceModalProps) => {
  const [description, setDescription] = useState("");

  const { handleSave, handleUpdate } = introCandidateService();

  useEffect(() => {
    setDescription(isUpdateMode ? initialValue.description : "");
  }, [show]);

  const onClickSave = async () => {
    if (isUpdateMode) {
      const res = await handleUpdate(initialValue.id, { description });
      if (res?.status === 200) {
        toast.success("Đã cập nhật");
      } else {
        toast.error("Đã xảy ra lỗi không cập nhật  được");
      }
      onClose();
    } else {
      const res = await handleSave({ description });
      if (res?.status === 201) {
        toast.success("Tạo thành công");
        setDescription("");
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
      <Modal show={show} onClose={onClose}>
        <Modal.Header className="text-center">
          Giới thiệu về bản thân
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <label>Mô tả về bản thân các kỹ năng của mình </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full"
              placeholder="Hint text"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClickSave}>
            {isUpdateMode ? "Cập nhật" : "Tạo"}
          </Button>
          <Button color="gray" onClick={onClose}>
            Hủy Bỏ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default IntroduceModal;
