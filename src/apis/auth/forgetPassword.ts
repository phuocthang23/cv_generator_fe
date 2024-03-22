import { AxiosResponse } from "axios";
import {
  confirmPasswordRequest,
  forgerPasswordRequest,
} from "./request/forgetPassword.request";
import axiosInstance from "../base.api";
import { API_CHECK_MAIL, API_COMFIRM_PASSWORD } from "../patchApi";
import {
  comfirmPasswordResponse,
  resetPasswordResponse,
} from "./reponse/login.reponse";

export const resetPasswordApi = async (
  requestBody: forgerPasswordRequest
): Promise<AxiosResponse<resetPasswordResponse, any>> => {
  try {
    const response = await axiosInstance.put(API_CHECK_MAIL, requestBody);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const confirmPasswordApi = async (
  requestBody: confirmPasswordRequest
): Promise<AxiosResponse<comfirmPasswordResponse, any>> => {
  try {
    const response = await axiosInstance.put(API_COMFIRM_PASSWORD, requestBody);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
