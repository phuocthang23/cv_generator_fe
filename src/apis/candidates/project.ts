import { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_PROJECT_CANDIDATE } from "../patchApi";

export const createProjectCandidate = async (
  requestBody: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.post(
      `${API_PROJECT_CANDIDATE}`,
      requestBody
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteProject = async (
  id: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.delete(
      `${API_PROJECT_CANDIDATE}/${id}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
