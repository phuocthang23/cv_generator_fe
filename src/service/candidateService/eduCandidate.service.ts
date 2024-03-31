import { useDispatch } from "react-redux";
import { generateToken } from "../../utils/generateToken.utils";
import { getOneCandidateApi } from "../../apis/candidates";
import { candidateDetailAction } from "../../store/action/candidate.action";
import { useState } from "react";
import {
  createEduCandidate,
  deleteEdu,
  updateEduCandidate,
} from "../../apis/candidates/edu";
import { toast } from "react-toastify";

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
      const response = await createEduCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  const handleUpdate = async (idbutton: any, body: any) => {
    try {
      const response = await updateEduCandidate(idbutton, body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  const handleDeleteEdu = async (idDelete: any) => {
    try {
      await deleteEdu(idDelete);
      toast.success("đã xóa bỏ phần giáo dục");
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
    handleUpdate,
  };
};
