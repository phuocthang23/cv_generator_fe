import { useEffect } from "react";
import { getOneCandidateApi } from "../../apis/candidates";
import { AppState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { candidateDetailAction } from "../../store/action/candidate.action";

export const candidatesDetail = (id: any) => {
  const dispatch = useDispatch();
  const dataJob = useSelector(
    (state: AppState) => (state.candidateReducer as any).candidatesDetail
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getOneCandidateApi(id);
        dispatch(candidateDetailAction(res));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return dataJob;
};
