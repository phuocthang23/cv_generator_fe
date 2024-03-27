import { AxiosResponse } from "axios";
import axiosInstance from "../base.api";
import { API_COMPANY } from "../patchApi";

interface compayParams {
  page?: number;
  limit?: number;
}
export const getCompanyApi = async (
  params: compayParams
): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axiosInstance.get(API_COMPANY, { params });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
