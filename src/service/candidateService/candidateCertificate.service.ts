import { useDispatch } from "react-redux";
import { generateToken } from "../../utils/generateToken.utils";
import { getOneCandidateApi } from "../../apis/candidates";
import { candidateDetailAction } from "../../store/action/candidate.action";
import { useState } from "react";
import {
  createCertificateCandidate,
  deleteCertificate,
  updateCertificateCandidate,
} from "../../apis/candidates/certificate";
import { toast } from "react-toastify";

export const certificateCandidateService = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [started_at, setStarted_at] = useState("");
  const [end_at, setEnd_at] = useState("");
  const [info, setInfo] = useState("");

  const dispatch = useDispatch();

  const dataToken: any = generateToken();
  const id = (dataToken as any).id;

  const handleSave = async (body: any) => {
    try {
      const response = await createCertificateCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  const handleUpdate = async (idbutton: any, body: any) => {
    try {
      const response = await updateCertificateCandidate(idbutton, body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  const handleDeleteCertificate = async (idDelete: any) => {
    try {
      await deleteCertificate(idDelete);
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
    organization,
    setName,
    setOrganization,
    started_at,
    end_at,
    info,
    setStarted_at,
    setEnd_at,
    setInfo,
    handleDeleteCertificate,
    handleUpdate,
  };
};
