import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { IS_PROD } from "../constants/env";
import { AppReducer } from "../pages/app/state/reducer";

const rootReducer = combineReducers({
  foo: () => ({}), // remove it and connect your reducers
});

const reducer = combineReducers({
  app: AppReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
  devTools: !IS_PROD,
});

export type Store = ReturnType<typeof reducer>;
