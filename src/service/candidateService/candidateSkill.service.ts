import { useDispatch, useSelector } from "react-redux";
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
import {
  skillADDAction,
  skillRemoveAction,
} from "../../store/action/skill.actiocn";
import { AppState } from "../../store";
import { Error_Language, Error_Level } from "../../common/errorMessage/index";

export const skillCandidateService = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("1");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const dataSkill = useSelector(
    (state: AppState) => (state.skillReducer as any).listSkill
  );

  const dataToken: any = generateToken();
  const id = (dataToken as any).id;

  const handleRemove = async (id: any) => {
    try {
      dispatch(skillRemoveAction(id));
    } catch (error) {
      return;
    }
  };

  const handleAddSkill = async (body: any) => {
    if (name === "") {
      setError(Error_Language);
      return;
    } else if (level === "") {
      setError(Error_Level);
    } else {
      setError("");
      dispatch(skillADDAction(body));
    }
  };

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
    handleAddSkill,
    dataSkill,
    handleRemove,
    error,
  };
};
