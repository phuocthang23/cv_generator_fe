import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { introCandidateService } from "../../service/candidateService/introCandidate.service";

const IntroduceModal = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [description, setDescription] = useState("");

  const { handleSave } = introCandidateService();

  const onClickSave = async () => {
    await handleSave({ description });
    setDescription("");
    onClose();
  };
  return (
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
        <Button onClick={onClickSave}>Cập Nhật</Button>
        <Button color="gray" onClick={onClose}>
          Hủy Bỏ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IntroduceModal;
