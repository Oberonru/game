import { Store } from "../../../store/store";

export const current = (store: Store) => store.app;

export const status = (store: Store) => ({
  name: current(store).name,
  version: current(store).version,
});
