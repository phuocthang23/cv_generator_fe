import { AxiosResponse } from "axios";

import axiosInstance from "../base.api";
import { LoginRequest } from "./request/login.request";
import { LoginResponse } from "./reponse/login.reponse";

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

export { loginApi };
