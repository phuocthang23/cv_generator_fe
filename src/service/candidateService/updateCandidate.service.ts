import { getOneCandidateApi, updateCandidate } from "../../apis/candidates";
import { useDispatch } from "react-redux";
import { candidatesDetail } from "./candidateDetail.service";

export const updateCandidateService = () => {
  const dispatch = useDispatch();
  const handleSave = async (id: any, body: any) => {
    try {
      const formData = new FormData();
      Object.entries(body).forEach(([key, value]) =>
        formData.append(key, value as string | Blob)
      );

      await updateCandidate(id, formData);
      const res: any = await getOneCandidateApi({ id });
      dispatch(res);
      candidatesDetail({ id });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return {
    handleSave,
  };
};
