import { Button, Modal } from "flowbite-react";
// import { TiDeleteOutline } from "react-icons/ti";
import { skillService } from "../../service/skill/skill.service";
import { skillCandidateService } from "../../service/candidateService/candidateSkill.service";

const Skill = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const data = skillService();
  const { handleSave, name, level, setName, setLevel } =
    skillCandidateService();

  const onClickClose = () => {
    setName("");
    setLevel("");
    onClose();
  };

  const onClickSave = async () => {
    await handleSave({
      name,
      level_job_id: level,
    });
    setName("");
    setLevel("");
    onClose();
  };

  return (
    <div>
      <Modal show={show} size="3xl" onClose={onClose}>
        <Modal.Header className="text-center">Kỹ năng </Modal.Header>
        <Modal.Body>
          <form className="flex justify-between  items-center">
            <section className="min-w-72">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value={name}
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
            </section>

            <section className="my-5 w-full max-w-72">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
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

            {/* <div className="flex justify-end">
              <Button
                color="white"
                className="p-2 font-semibold text-red-500 border-red-500 border-2"
              >
                thêm mới
              </Button>
            </div> */}
          </form>
          {/* <div className="mt-5">
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
          </div> */}
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

export default Skill;
