import { createAction } from "@reduxjs/toolkit";

const jobAction: any = createAction("GET_JOB");
const jobDetailAction: any = createAction("GET_JOB_DETAIL");
const getAllJobApiAction: any = createAction("GET_ALL_JOB");

export { jobAction, jobDetailAction, getAllJobApiAction };
