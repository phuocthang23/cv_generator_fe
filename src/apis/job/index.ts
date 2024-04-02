import { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_JOB } from "../patchApi";

interface JobParams {
  page?: number;
  limit?: number;
  title?: string;
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

export const getAllJobApi = async (): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.get(API_JOB);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getOneJobApi = async (
  id: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.get(`${API_JOB}/${id.id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
