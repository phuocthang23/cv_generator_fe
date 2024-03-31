import {
  ActionReducerMapBuilder,
  PayloadAction,
  createReducer,
} from "@reduxjs/toolkit";
import { companyAction, companyDetailAction } from "../action/company.action";

const initState = {
  getAllCompany: [],
  listCompany: [],
  companyDetail: {},
};
const companyReducer: any = createReducer(
  initState,
  (builder: ActionReducerMapBuilder<any>) =>
    builder
      .addCase(companyAction, (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          listCompany: action.payload,
        };
      })
      .addCase(
        companyDetailAction,
        (state: any, action: PayloadAction<string>) => {
          return {
            ...state,
            companyDetail: action.payload,
          };
        }
      )
);

export default companyReducer;
