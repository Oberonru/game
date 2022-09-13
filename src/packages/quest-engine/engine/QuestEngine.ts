import { Quest } from '../entities/Quest.types';
import { Scene } from '../entities/Scene.types';
import { Transition } from '../entities/Transition.types';
import { IQuestEngine } from './QuestEngine.types';

export class QuestEngine implements IQuestEngine {
  private readonly _quest: Quest;
  private _currentScene: Scene;
  private _previousScene: Scene | undefined;

  constructor(quest: Quest) {
    this._quest = quest;

    const scene = this._quest.scenes.find((scene) => scene.type === 'start');

    if (!scene) {
      throw new Error('Quest has not start scene');
    }

    this._currentScene = scene;
  }

  get currentScene(): Scene {
    return this._currentScene;
  }

  get transitions(): Transition[] {
    return this._currentScene.transitions.filter(
      (transition) =>
        (transition.maxTransitions > 0 || transition.maxTransitions === undefined) &&
        transition.isAvaible &&
        transition.isVisible,
    );
  }

  goTo(transition: Transition) {
    const scene = this._quest.scenes.find((scene) => scene.id === transition.target);

    if (!scene) {
      throw new Error(`'Quest has not a scene with id ${transition.target}'`);
    }

    this._currentScene = scene;
    transition.maxTransitions--;

    return this._currentScene;
  }
}
