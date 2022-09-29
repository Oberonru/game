import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import * as actions from "./actions";
import { initialState } from "./initialState";
import { QuestEditorState } from "./types";


const createScene = (
  state: QuestEditorState,
  action: ReturnType<typeof actions.createScene>
) => {
  const { x, y } = action.payload;
  const newScene = {
    id: uuid(),
    type: "intermediate",
    transitions: [],
    coordinates: { x, y },
  };

  state.scenes = [...state.scenes, newScene];
  state.selectedScene = newScene;

  return state;
};

const selectScene = (
  state: QuestEditorState,
  action: ReturnType<typeof actions.selectScene>
) => {
  const currentScene = action.payload;
  state.selectedScene = currentScene;
};

export const CanvasReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.createScene, createScene)
    .addCase(actions.selectScene, selectScene)
);