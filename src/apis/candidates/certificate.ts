import axios, { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_CERTIFICATE_CANDIDATE } from "../patchApi";

export const createCertificateCandidate = async (
  requestBody: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.post(
      `${API_CERTIFICATE_CANDIDATE}`,
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

export const updateCertificateCandidate = async (
  id: any,
  requestBody: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.put(
      `${API_CERTIFICATE_CANDIDATE}/${id}`,
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

export const deleteCertificate = async (
  id: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.delete(
      `${API_CERTIFICATE_CANDIDATE}/${id}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
