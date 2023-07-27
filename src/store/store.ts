import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import dynamicFormReducer from "../features/DynamicFormsList/dynamicFormsSlice";
export const store = configureStore({
  reducer: {
    dynamicFormReducer: dynamicFormReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
