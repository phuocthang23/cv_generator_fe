import { useDispatch } from "react-redux";
import { generateToken } from "../../utils/generateToken.utils";
import { getOneCandidateApi } from "../../apis/candidates";
import {
  createExpCandidate,
  deleteExp,
  updateExpCandidate,
} from "../../apis/candidates/exp";
import { candidateDetailAction } from "../../store/action/candidate.action";
import { useState } from "react";
import { toast } from "react-toastify";

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
      const response = await createExpCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  const handleUpdate = async (idbutton: any, body: any) => {
    try {
      const response = await updateExpCandidate(idbutton, body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  const handleDeleteExp = async (idDelete: any) => {
    try {
      await deleteExp(idDelete);
      toast.success("đã xóa bỏ phần giờ dữ liệu");
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
    handleUpdate,
  };
};
