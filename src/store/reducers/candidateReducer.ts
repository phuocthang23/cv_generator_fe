import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  candidateAction,
  candidateDetailAction,
} from "../action/candidate.action";

const initState = {
  getAllCandidates: [],
  candidatesDetail: {},
};

const candidateReducer: any = createReducer(
  initState,
  (builder: ActionReducerMapBuilder<any>) =>
    builder
      .addCase(candidateAction, (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          getAllCandidates: action.payload,
        };
      })
      .addCase(
        candidateDetailAction,
        (state: any, action: PayloadAction<string>) => {
          return {
            ...state,
            candidatesDetail: action.payload,
          };
        }
      )
);

export default candidateReducer;
