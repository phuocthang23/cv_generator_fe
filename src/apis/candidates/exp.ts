import { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_EXP_CANDIDATE } from "../patchApi";

export const createExpCandidate = async (
  requestBody: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.post(
      `${API_EXP_CANDIDATE}`,
      requestBody
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteExp = async (id: any): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.delete(`${API_EXP_CANDIDATE}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
