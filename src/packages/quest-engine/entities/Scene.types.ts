//import { Condition } from './Condition.types';
import { Transition } from "./Transition.types";
//import { Var } from './Var.types';

export type Scene = {
  id: string;
  type: string;
  transitions: Transition[];
  coordinates: { x: number; y: number };
  description?: string;
  image?: string;
  //condition?: Condition;

  //это мое добавление
  //variables: Var[];
};
