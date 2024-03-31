import { useDispatch } from "react-redux";
import {
  createIntroCandidate,
  deleteIntro,
  getOneCandidateApi,
  updateIntroCandidate,
} from "../../apis/candidates";
import { generateToken } from "../../utils/generateToken.utils";
import { candidateDetailAction } from "../../store/action/candidate.action";
import { toast } from "react-toastify";

export const introCandidateService = () => {
  const dispatch = useDispatch();

  const dataToken: any = generateToken();
  const id = (dataToken as any).id;

  const handleSave = async (body: any) => {
    try {
      const response = await createIntroCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  const handleUpdate = async (idbutton: any, body: any) => {
    try {
      const response = await updateIntroCandidate(idbutton, body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return response;
    } catch (error) {
      return;
    }
  };

  return { handleSave, handleUpdate };
};

export const deleteIntroCandidateService = () => {
  const dispatch = useDispatch();
  const dataToken: any = generateToken();
  const id = (dataToken as any).id;
  const handleDelete = async (idDelete: any) => {
    try {
      await deleteIntro(idDelete);
      toast.success("đã loại bỏ phần giới thiệu bản thân");
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      return;
    } catch (error) {
      return;
    }
  };
  return { handleDelete };
};
