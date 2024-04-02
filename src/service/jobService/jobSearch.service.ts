import { useDispatch } from "react-redux";
import { getJobApi } from "../../apis/job";
import { jobAction } from "../../store/action/job.action";
import { useState } from "react";

export const searchJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async (searchTerm: string) => {
    try {
      const response = await getJobApi({ title: searchTerm });
      dispatch(jobAction(response));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return { handleSearch, searchTerm, setSearchTerm };
};
