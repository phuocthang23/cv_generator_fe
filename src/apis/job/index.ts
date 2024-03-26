import { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_JOB } from "../patchApi";

interface JobParams {
  page?: number;
  limit?: number;
}
export const getJobApi = async (
  params: JobParams
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.get(API_JOB, { params });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
