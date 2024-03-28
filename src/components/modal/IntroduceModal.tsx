import { Button, Modal } from "flowbite-react";

const IntroduceModal = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header className="text-center">
        Giới thiệu về bản thân
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <label>Mô tả về bản thân các kỹ năng của mình </label>
          <textarea className="w-full" placeholder="Hint text" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Cập Nhật</Button>
        <Button color="gray" onClick={onClose}>
          Hủy Bỏ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IntroduceModal;
