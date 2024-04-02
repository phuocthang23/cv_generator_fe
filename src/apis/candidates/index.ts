import axios, { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import {
  API_CANDIDATES,
  API_INTRODUCE_CANDIDATE,
  API_UPDATE_CANDIDATE,
} from "../patchApi";

interface CandidateParams {
  page?: number;
  limit?: number;
  title?: string;
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

export const updateCandidate = async (
  id: any,
  requestBody: any
): Promise<AxiosResponse<any, any>> => {
  try {
    console.log(requestBody);
    const response = await axiosInstance.put(
      `${API_UPDATE_CANDIDATE}/${id}`,
      requestBody,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createIntroCandidate = async (
  requestBody: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.post(
      `${API_INTRODUCE_CANDIDATE}`,
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

export const deleteIntro = async (
  id: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.delete(
      `${API_INTRODUCE_CANDIDATE}/${id}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateIntroCandidate = async (
  id: any,
  requestBody: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.put(
      `${API_INTRODUCE_CANDIDATE}/${id}`,
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
