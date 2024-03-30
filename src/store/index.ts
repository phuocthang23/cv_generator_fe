import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobReducer from "./reducers/jobReducer";
import candidateReducer from "./reducers/candidateReducer";
import companyReducer from "./reducers/companyReducer";
import skillReducer from "./reducers/skillReducer";

const rootReducer = combineReducers({
  jobReducer,
  companyReducer,
  candidateReducer,
  skillReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
