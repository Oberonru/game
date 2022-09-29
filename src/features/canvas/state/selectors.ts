import { Store } from "../../../store/store";

const current = (store: Store) => store.canvas;

export const status = (store: Store) => ({});

export const getScenes = (state: Store) => current(state).scenes;

export const selectedScene = (state: Store) => current(state).selectedScene;