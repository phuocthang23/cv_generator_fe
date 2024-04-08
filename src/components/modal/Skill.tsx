import { Button, Modal, Tooltip } from "flowbite-react";
import { skillService } from "../../service/skill/skill.service";
import { skillCandidateService } from "../../service/candidateService/candidateSkill.service";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import "./index.scss";
import { v4 as uuidv4 } from "uuid";

interface IntroduceModalProps {
  show: boolean;
  onClose: () => void;
  isUpdateMode: boolean;
  initialValue: any;
}

const Skill = ({
  show,
  onClose,
  isUpdateMode,
  initialValue,
}: IntroduceModalProps) => {
  const data = skillService();
  const {
    handleSave,
    name,
    level,
    error,
    setName,
    setLevel,
    handleUpdate,
    handleAddSkill,
    dataSkill,
    handleRemove,
  } = skillCandidateService();

  const skillDetail = dataSkill;

  useEffect(() => {
    setName(isUpdateMode ? initialValue.name : "");
    setLevel(isUpdateMode ? initialValue.level_job_id : "");
  }, [show]);

  const onClickClose = () => {
    setName(isUpdateMode ? initialValue.name : "");
    setLevel(isUpdateMode ? initialValue.level_job_id : "");
    onClose();
  };

  const onClickSave = async () => {
    if (isUpdateMode) {
      const res = await handleUpdate(initialValue.id, {
        name,
        level_job_id: level,
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
        level_job_id: level,
      });
      if (res?.status === 201) {
        toast.success("Tạo thành công");
        setName("");
        setLevel("");
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
      <Modal show={show} size="4xl" onClose={onClose}>
        <Modal.Header className="text-center">Kỹ năng </Modal.Header>
        <Modal.Body>
          <form className="flex justify-between items-center">
            <section className="min-w-72">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              >
                <option value="" className="p-2">
                  language
                </option>
                {data.map((item: any) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              {error && name === "" && (
                <p className="text-red-500 mt-2">{error}</p>
              )}
            </section>

            <section className="my-5 w-full max-w-72">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={level}
                required
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="" className="p-2">
                  lựa chọn level
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
              {error && level === "" && (
                <p className="text-red-500 mt-2">{error}</p>
              )}
            </section>

            <Button
              color="white"
              className=" font-semibold text-red-500 border-red-500 border-2"
              onClick={() =>
                handleAddSkill({
                  id: uuidv4(),
                  name: name,
                  level_job_id: level,
                })
              }
            >
              thêm mới
            </Button>
          </form>

          <div className="mt-5">
            <div className="badge">
              <span className="font-bold">
                Thành thạo
                <Tooltip content="Nhiều hơn 3 năm kinh nghiệm" style="dark">
                  <AiOutlineExclamationCircle />
                </Tooltip>
              </span>
              <div>
                {skillDetail.length > 0 &&
                skillDetail.filter((item: any) => item.level_job_id === "3")
                  .length > 0 ? (
                  skillDetail
                    .filter((item: any) => item.level_job_id === "3")
                    .map((item: any) => (
                      <span
                        key={item.id}
                        className=" px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full"
                      >
                        {item.name}
                        <CiCircleRemove
                          onClick={() => handleRemove(item.id)}
                          className="inline-flex items-center ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900"
                        />
                      </span>
                    ))
                ) : (
                  <p>Chưa thêm kỹ năng nào</p>
                )}
              </div>
            </div>
            {/* trung bình */}
            <div className="badge">
              <span className="font-bold">
                Trung bình
                <Tooltip content="1 - 3 năm kinh nghiệm" style="dark">
                  <AiOutlineExclamationCircle />
                </Tooltip>
              </span>
              <div>
                {skillDetail.length > 0 &&
                skillDetail.filter((item: any) => item.level_job_id === "2")
                  .length > 0 ? (
                  skillDetail
                    .filter((item: any) => item.level_job_id === "2")
                    .map((item: any) => (
                      <span
                        key={item.id}
                        className=" px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full"
                      >
                        {item.name}
                        <CiCircleRemove
                          onClick={() => handleRemove(item.id)}
                          className="inline-flex items-center ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900"
                        />
                      </span>
                    ))
                ) : (
                  <p>Chưa thêm kỹ năng nào</p>
                )}
              </div>
            </div>
            {/* mới */}
            <div className="badge">
              <span className="font-bold">
                Mới bắt đầu
                <Tooltip content="Ít hơn 1 năm kinh nghiệm" style="dark">
                  <AiOutlineExclamationCircle />
                </Tooltip>
              </span>
              <div>
                {skillDetail.length > 0 &&
                skillDetail.filter((item: any) => item.level_job_id === "1")
                  .length > 0 ? (
                  skillDetail
                    .filter((item: any) => item.level_job_id === "1")
                    .map((item: any) => (
                      <span
                        key={item.id}
                        className=" px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full"
                      >
                        {item.name}
                        <CiCircleRemove
                          onClick={() => handleRemove(item.id)}
                          className="inline-flex items-center ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900"
                        />
                      </span>
                    ))
                ) : (
                  <p>Chưa thêm kỹ năng nào</p>
                )}
              </div>
            </div>
          </div>
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

export default Skill;
