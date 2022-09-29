import { createAction } from "@reduxjs/toolkit";
import { Scene } from "../../../packages/quest-engine";

const PREFIX = "Canvas";
const withName = (name: string) => `${PREFIX}/${name}`;

export const createScene = createAction<{ x: number; y: number }>(
  withName("createScene")
);

export const selectScene = createAction<Scene>(withName("selectedScene"));