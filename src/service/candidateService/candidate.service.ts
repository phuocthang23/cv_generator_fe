import { useEffect } from "react";
import { getCandidatesApi } from "../../apis/candidates";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { candidateAction } from "../../store/action/candidate.action";

export const getCandidate = ({ page, limit }: any) => {
  const dispatch = useDispatch();
  const dataCandidates = useSelector(
    (state: AppState) => (state.candidateReducer as any).getAllCandidates
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await getCandidatesApi({ page, limit });
        dispatch(candidateAction(response));
      } catch (error) {
        console.log(error);
        return;
      }
    };

    fetchData();
  }, [page]);

  return dataCandidates;
};
