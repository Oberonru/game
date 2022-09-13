export type Transition = {
  priority?: number;
  maxTransitions: number;
  target: number;
  text: string;
  isAvaible: boolean;
  isVisible: boolean;
  /* isAvaible(): boolean;
    isVisible(): boolean; */
  // varChanges: VarChanges[];
  //логическое условие
  // condition: Condition;
};

export type Scene = {
  id: number;
  description?: string;
  image?: string;
  type: string;
  transitions: Transition[];
  //condition?: Condition;
  //это мое добавление
  //variables: Var[];
};

export type Quest = {
    name: string;
    scenes: Scene[];
  };
