import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";

import { skillAction } from "../action/skill.actiocn";

const initState = {
  getAllSkill: [],
};

const skillReducer: any = createReducer(
  initState,
  (builder: ActionReducerMapBuilder<any>) =>
    builder.addCase(
      skillAction,
      (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          getAllSkill: action.payload,
        };
      }
    )
);

export default skillReducer;
