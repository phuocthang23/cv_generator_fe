import { createAction } from "@reduxjs/toolkit";

const companyAction: any = createAction("GET_COMPANY");
const companyDetailAction: any = createAction("GET_ONE_COMPANY");

export { companyAction, companyDetailAction };
