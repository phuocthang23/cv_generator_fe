import { AxiosResponse } from "axios";

import axiosInstance from "../base.api";
import { LoginRequest, RegisterRequest } from "./request/login.request";
import { LoginResponse, registerResponse } from "./reponse/login.reponse";
import { API_LOGIN, API_REGISTER } from "../patchApi";

const loginApi = async (
  requestBody: LoginRequest
): Promise<AxiosResponse<LoginResponse, any>> => {
  try {
    const response = await axiosInstance.post(API_LOGIN, requestBody);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const RegisterApi = async (
  requestBody: RegisterRequest
): Promise<AxiosResponse<registerResponse, any>> => {
  try {
    const response = await axiosInstance.post(API_REGISTER, requestBody);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { loginApi, RegisterApi };
