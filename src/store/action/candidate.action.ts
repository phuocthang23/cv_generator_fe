import { createAction } from "@reduxjs/toolkit";

const candidateAction: any = createAction("GET_CANDIDATES");
const candidateDetailAction: any = createAction("GET_CANDIDATES_DETAIL");

export { candidateAction, candidateDetailAction };
