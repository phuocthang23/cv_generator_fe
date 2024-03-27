import {
  ActionReducerMapBuilder,
  PayloadAction,
  createReducer,
} from "@reduxjs/toolkit";
import { companyAction } from "../action/company.action";

const initState = {
  getAllCompany: [],
  listCompany: [],
  jobDetail: {},
};

const companyReducer: any = createReducer(
  initState,
  (builder: ActionReducerMapBuilder<any>) =>
    builder.addCase(
      companyAction,
      (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          listCompany: action.payload,
        };
      }
    )
);

export default companyReducer;
