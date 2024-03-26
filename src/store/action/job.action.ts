import { createAction } from "@reduxjs/toolkit";

const jobAction: any = createAction("GET_JOB");
const jobDetailAction: any = createAction("GET_JOB_DETAIL");

export { jobAction, jobDetailAction };
