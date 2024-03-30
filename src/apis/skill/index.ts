import { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_SKILL } from "../patchApi";

export const getSkillApi = async (): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.get(API_SKILL);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
