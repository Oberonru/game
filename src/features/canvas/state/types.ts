import { Scene } from "../../../packages/quest-engine";

export type QuestEditorState = {
  scenes: Scene[];
  selectedScene?: Scene;
};