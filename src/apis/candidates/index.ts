import { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_CANDIDATES } from "../patchApi";

interface JobParams {
  page?: number;
  limit?: number;
}
export const getCandidatesApi = async (
  params: JobParams
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.get(API_CANDIDATES, { params });
    return response.data;
  } catch (err) {
    throw err;
  }
};
// export const getOneJobApi = async (
//   id: any
// ): Promise<AxiosResponse<any, any>> => {
//   try {
//     const response = await axiosInstance.get(`${API_JOB}/${id.id}`);
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };
