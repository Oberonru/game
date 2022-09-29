import { useSelector } from "react-redux";
import style from './style.module.css';

import { selectedScene } from "../canvas/state/selectors";

export const Transition = () => {
  const transitions = useSelector(selectedScene)?.transitions;

  return (
    <div className={style.transitions}>
      {transitions?.map((transition) => (
        <span>{transition.text}</span>
      ))}
    </div>
  );
};
