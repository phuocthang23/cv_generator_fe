import { useEffect } from "react";
import { getAllJobApi, getOneJobApi } from "../../apis/job";
import { AppState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllJobApiAction,
  jobDetailAction,
} from "../../store/action/job.action";

export const jobDetail = (id: any) => {
  const dispatch = useDispatch();
  const dataJob = useSelector(
    (state: AppState) => (state.jobReducer as any).jobDetail
  );

  const relatedJobs = useSelector(
    (state: AppState) => (state.jobReducer as any).getAllJob
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getOneJobApi(id);
        dispatch(jobDetailAction(res));

        const relatedJobsData: any = await getAllJobApi();
        const filteredRelatedJobs = relatedJobsData.data;
        dispatch(getAllJobApiAction(filteredRelatedJobs));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { dataJob, relatedJobs };
};
