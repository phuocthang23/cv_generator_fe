import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";

import {
  skillAction,
  skillADDAction,
  skillRemoveAction,
} from "../action/skill.actiocn";

const initState = {
  getAllSkill: [],
  listSkill: [],
};

const skillReducer: any = createReducer(
  initState,
  (builder: ActionReducerMapBuilder<any>) =>
    builder
      .addCase(skillAction, (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          getAllSkill: action.payload,
        };
      })
      .addCase(skillADDAction, (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          listSkill: [...state.listSkill, action.payload],
        };
      })
      .addCase(
        skillRemoveAction,
        (state: any, action: PayloadAction<string>) => {
          const updatedDataSkill = state.listSkill.filter(
            (item: any) => item.id !== action.payload
          );
          return {
            ...state,
            listSkill: updatedDataSkill,
          };
        }
      )
);

export default skillReducer;
