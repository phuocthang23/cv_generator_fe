import { useDispatch } from "react-redux";
import { generateToken } from "../../utils/generateToken.utils";
import { candidateDetailAction } from "../../store/action/candidate.action";
import { useState } from "react";
import {
  createSkillCandidate,
  deleteSkill,
  updateSkillCandidate,
} from "../../apis/candidates/skill";
import { getOneCandidateApi } from "../../apis/candidates";
import { toast } from "react-toastify";

export const skillCandidateService = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("1");

  const dispatch = useDispatch();

  const dataToken: any = generateToken();
  const id = (dataToken as any).id;

  const handleSave = async (body: any) => {
    try {
      const response = await createSkillCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  const handleUpdate = async (idbutton: any, body: any) => {
    try {
      const response = await updateSkillCandidate(idbutton, body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  const handleDeleteSkill = async (idDelete: any) => {
    try {
      await deleteSkill(idDelete);
      toast.success("đã xóa bỏ phần giờ dữ liệu");
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
    } catch (error) {
      return;
    }
  };

  return {
    handleSave,
    name,
    level,
    setName,
    setLevel,
    handleDeleteSkill,
    handleUpdate,
  };
};
