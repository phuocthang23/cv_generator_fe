import { getOneCandidateApi, updateCandidate } from "../../apis/candidates";
import { useDispatch } from "react-redux";
import { candidatesDetail } from "./candidateDetail.service";
import { candidateDetailAction } from "../../store/action/candidate.action";

export const updateCandidateService = () => {
  const dispatch = useDispatch();
  const handleSave = async (id: any, body: any) => {
    try {
      await updateCandidate(id, body);
      const res: any = await getOneCandidateApi({ id });
      dispatch(candidateDetailAction(res));
      candidatesDetail({ id });
    } catch (error) {
      return;
    }
  };

  return {
    handleSave,
  };
};
