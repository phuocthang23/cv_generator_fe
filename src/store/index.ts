import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobReducer from "./reducers/jobReducer";

const rootReducer = combineReducers({
  jobReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
