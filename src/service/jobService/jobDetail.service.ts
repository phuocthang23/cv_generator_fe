import { useEffect } from "react";
import { getOneJobApi } from "../../apis/job";
import { AppState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { jobDetailAction } from "../../store/action/job.action";

export const jobDetail = (id: any) => {
  const dispatch = useDispatch();
  const dataJob = useSelector(
    (state: AppState) => (state.jobReducer as any).jobDetail
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getOneJobApi(id);
        dispatch(jobDetailAction(res));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return dataJob;
};
