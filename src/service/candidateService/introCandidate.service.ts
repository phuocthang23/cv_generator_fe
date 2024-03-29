import { useDispatch } from "react-redux";
import {
  createIntroCandidate,
  getOneCandidateApi,
} from "../../apis/candidates";
import { generateToken } from "../../utils/generateToken.utils";

export const introCandidateService = () => {
  const dispatch = useDispatch();

  const dataToken: any = generateToken();
  const id = (dataToken as any).id;

  const handleSave = async (body: any) => {
    try {
      await createIntroCandidate(body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(res);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return { handleSave };
};
