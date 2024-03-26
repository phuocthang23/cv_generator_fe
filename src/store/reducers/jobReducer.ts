import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { jobAction } from "../action/job.action";

const initState = {
  listJob: [],
};

const jobReducer: any = createReducer(
  initState,
  (builder: ActionReducerMapBuilder<any>) =>
    builder.addCase(jobAction, (state: any, action: PayloadAction<string>) => {
      return {
        ...state,
        listJob: action.payload,
      };
    })
);

export default jobReducer;
