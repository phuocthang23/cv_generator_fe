import axios, { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_EDU_CANDIDATE } from "../patchApi";

export const createEduCandidate = async (
  requestBody: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.post(
      `${API_EDU_CANDIDATE}`,
      requestBody
    );
    return response;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return err.response;
    }
    console.log(err);
    throw err;
  }
};

export const updateEduCandidate = async (
  id: any,
  requestBody: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.put(
      `${API_EDU_CANDIDATE}/${id}`,
      requestBody
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteEdu = async (id: any): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.delete(`${API_EDU_CANDIDATE}/${id}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return err.response;
    }
    console.log(err);
    throw err;
  }
};
