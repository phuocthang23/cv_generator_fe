import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  candidateAction,
  // jobAction,
  // jobDetailAction,
} from "../action/candidate.action";

const initState = {
  getAllCandidates: [],
  jobDetail: {},
};

const candidateReducer: any = createReducer(
  initState,
  (builder: ActionReducerMapBuilder<any>) =>
    builder.addCase(
      candidateAction,
      (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          getAllCandidates: action.payload,
        };
      }
    )
  // .addCase(candidateAction, (state: any, action: PayloadAction<string>) => {
  //   return {
  //     ...state,
  //     jobDetail: action.payload,
  //   };
  // })
);

export default candidateReducer;
