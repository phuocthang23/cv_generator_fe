import { useEffect } from "react";
import { getJobApi } from "../../apis/job";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { jobAction } from "../../store/action/job.action";

export const getJob = (data: any) => {
  const dispatch = useDispatch();
  const dataJob = useSelector(
    (state: AppState) => (state.jobReducer as any).listJob
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getJobApi({ ...data });
        dispatch(jobAction(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data.page]);
  return dataJob;
};
