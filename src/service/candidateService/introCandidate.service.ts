import { useDispatch } from "react-redux";
import {
  createIntroCandidate,
  deleteIntro,
  getOneCandidateApi,
} from "../../apis/candidates";
import { generateToken } from "../../utils/generateToken.utils";
import { candidateDetailAction } from "../../store/action/candidate.action";

export const introCandidateService = () => {
  const dispatch = useDispatch();

  const dataToken: any = generateToken();
  const id = (dataToken as any).id;

  const handleSave = async (body: any) => {
    try {
      await createIntroCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
    } catch (error) {
      return;
    }
  };

  return { handleSave };
};

export const deleteIntroCandidateService = () => {
  const dispatch = useDispatch();
  const dataToken: any = generateToken();
  const id = (dataToken as any).id;
  const handleDelete = async (idDelete: any) => {
    try {
      await deleteIntro(idDelete);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
    } catch (error) {
      return;
    }
  };
  return { handleDelete };
};
