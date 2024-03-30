import { useDispatch } from "react-redux";
import { generateToken } from "../../utils/generateToken.utils";
import { candidateDetailAction } from "../../store/action/candidate.action";
import { useState } from "react";
import { createSkillCandidate, deleteSkill } from "../../apis/candidates/skill";
import { getOneCandidateApi } from "../../apis/candidates";

export const skillCandidateService = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  const dispatch = useDispatch();

  const dataToken: any = generateToken();
  const id = (dataToken as any).id;

  const handleSave = async (body: any) => {
    try {
      await createSkillCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
    } catch (error) {
      return;
    }
  };

  const handleDeleteSkill = async (idDelete: any) => {
    try {
      await deleteSkill(idDelete);
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
  };
};
