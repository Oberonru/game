import { Scene } from '../entities/Scene.types';
import { Transition } from '../entities/Transition.types';

export interface IQuestEngine {
  readonly transitions: Transition[];
  readonly currentScene: Scene;

  goTo(transition: Transition): Scene;
}
