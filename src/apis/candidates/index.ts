import { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_CANDIDATES } from "../patchApi";

interface CandidateParams {
  page?: number;
  limit?: number;
}
export const getCandidatesApi = async (
  params: CandidateParams
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.get(API_CANDIDATES, { params });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getOneCandidateApi = async (
  id: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.get(`${API_CANDIDATES}/${id.id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
