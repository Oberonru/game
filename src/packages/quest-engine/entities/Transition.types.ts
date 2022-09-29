//import { Condition } from './Condition.types';
//import { VarChanges } from './VarChangeges.type';

export type Transition = {
  priority?: number;
  maxTransitions: number;
  target: string;
  text: string;
  isAvaible: boolean;
  isVisible: boolean;

  /* isAvaible(): boolean;
  isVisible(): boolean; */

  // varChanges: VarChanges[];
  //логическое условие
  // condition: Condition;
};
