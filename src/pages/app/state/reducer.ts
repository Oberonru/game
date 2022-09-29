import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { AppState } from "./types";
import * as actions from "./actions";
import { APP_NAME, CURRENT_VERSION } from "../../../constants/env";

const initApp = (
  state: AppState,
  action: ReturnType<typeof actions.initApp>
) => ({
  ...state,
  name: APP_NAME,
  version: CURRENT_VERSION,
});

export const AppReducer = createReducer(initialState, (builder) =>
  builder.addCase(actions.initApp, initApp)
);