import { createAction } from "@reduxjs/toolkit";

const skillAction: any = createAction("GET_ALL_SKILL");
const skillADDAction: any = createAction("ADD_SKILL_DETAIL");
const skillRemoveAction: any = createAction("REMOVE_SKILL");

export { skillAction, skillADDAction, skillRemoveAction };
