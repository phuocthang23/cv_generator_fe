import { AxiosResponse } from "axios";

import axiosInstance from "../base.api";
import { LoginRequest, RegisterRequest } from "./request/login.request";
import { LoginResponse, registerResponse } from "./reponse/login.reponse";

const loginApi = async (requestBody: LoginRequest): Promise<LoginResponse> => {
  return axiosInstance
    .post("/auth/login", requestBody)
    .then((response: AxiosResponse<LoginResponse>) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const RegisterApi = async (requestBody: any): Promise<any> => {
  return axiosInstance
    .post("/auth/register", requestBody)
    .then((response: AxiosResponse<any>) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export { loginApi, RegisterApi };
