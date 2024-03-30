import { useDispatch } from "react-redux";
import { generateToken } from "../../utils/generateToken.utils";
import { getOneCandidateApi } from "../../apis/candidates";
import { createExpCandidate, deleteExp } from "../../apis/candidates/exp";
import { candidateDetailAction } from "../../store/action/candidate.action";
import { useState } from "react";

export const expCandidateService = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [started_at, setStarted_at] = useState("");
  const [end_at, setEnd_at] = useState("");
  const [info, setInfo] = useState("");

  const dispatch = useDispatch();

  const dataToken: any = generateToken();
  const id = (dataToken as any).id;

  const handleSave = async (body: any) => {
    try {
      await createExpCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
    } catch (error) {
      return;
    }
  };

  const handleDeleteExp = async (idDelete: any) => {
    try {
      await deleteExp(idDelete);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
    } catch (error) {
      return;
    }
  };

  return {
    handleSave,
    company,
    position,
    setPosition,
    setCompany,
    started_at,
    end_at,
    info,
    setStarted_at,
    setEnd_at,
    setInfo,
    handleDeleteExp,
  };
};
