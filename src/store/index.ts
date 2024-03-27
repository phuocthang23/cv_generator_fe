import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobReducer from "./reducers/jobReducer";
import companyReducer from "./reducers/companyReducer";

const rootReducer = combineReducers({
  jobReducer,
  companyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
