import { AxiosResponse } from "axios";

import axiosInstance from "../base.api";
import {
  LoginRequest,
  RegisterCandidateRequest,
  RegisterRequest,
} from "./request/login.request";
import {
  LoginResponse,
  registerCandidateResponse,
  registerResponse,
} from "./reponse/login.reponse";
import {
  API_LOGIN,
  API_LOGIN_CANDIDATE,
  API_REGISTER,
  API_REGISTER_CANDIDATE,
} from "../patchApi";

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

const RegisterCandidateApi = async (
  requestBody: RegisterCandidateRequest
): Promise<AxiosResponse<registerCandidateResponse, any>> => {
  try {
    const response = await axiosInstance.post(
      API_REGISTER_CANDIDATE,
      requestBody
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loginCandidateApi = async (
  requestBody: LoginRequest
): Promise<AxiosResponse<LoginResponse, any>> => {
  try {
    const response = await axiosInstance.post(API_LOGIN_CANDIDATE, requestBody);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { loginApi, RegisterApi, RegisterCandidateApi, loginCandidateApi };
