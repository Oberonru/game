import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { IS_PROD } from '../constants/env';

const rootReducer = combineReducers({
  foo: () => ({}), // remove it and connect your reducers
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

export type RootState = ReturnType<typeof rootReducer>;
