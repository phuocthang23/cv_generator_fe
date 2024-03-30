import { useDispatch } from "react-redux";
import { generateToken } from "../../utils/generateToken.utils";
import { getOneCandidateApi } from "../../apis/candidates";
import { candidateDetailAction } from "../../store/action/candidate.action";
import { useState } from "react";
import { createEduCandidate, deleteEdu } from "../../apis/candidates/edu";

export const eduCandidateService = () => {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [started_at, setStarted_at] = useState("");
  const [end_at, setEnd_at] = useState("");
  const [info, setInfo] = useState("");

  const dispatch = useDispatch();

  const dataToken: any = generateToken();
  const id = (dataToken as any).id;

  const handleSave = async (body: any) => {
    try {
      await createEduCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
    } catch (error) {
      return;
    }
  };

  const handleDeleteEdu = async (idDelete: any) => {
    try {
      await deleteEdu(idDelete);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
    } catch (error) {
      return;
    }
  };

  return {
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
    handleDeleteEdu,
  };
};
