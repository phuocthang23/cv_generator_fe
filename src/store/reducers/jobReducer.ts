import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { jobAction, jobDetailAction } from "../action/job.action";

const initState = {
  listJob: [],
  jobDetail: {},
};

const jobReducer: any = createReducer(
  initState,
  (builder: ActionReducerMapBuilder<any>) =>
    builder
      .addCase(jobAction, (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          listJob: action.payload,
        };
      })
      .addCase(jobDetailAction, (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          jobDetail: action.payload,
        };
      })
);

export default jobReducer;
