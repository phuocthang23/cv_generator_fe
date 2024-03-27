import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  getAllJobApiAction,
  jobAction,
  jobDetailAction,
} from "../action/job.action";

const initState = {
  getAllJob: [],
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
      .addCase(
        getAllJobApiAction,
        (state: any, action: PayloadAction<string>) => {
          return {
            ...state,
            getAllJob: action.payload,
          };
        }
      )
);

export default jobReducer;
