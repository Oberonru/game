import { useSelector } from "react-redux";
import style from "./style.module.css";
import * as selectors from "../canvas/state/selectors";

export const SceneProperties = () => {
  const scenes = useSelector(selectors.getScenes);
  const selectedScene = useSelector(selectors.selectedScene);
  const count = scenes.length;

  return (
    <div className={style.container}>
      <div>количество сцен : {count}</div>
      <div>координаты созданной сцены {scenes.map((scena, key) => <span key={key++}>x : {scena.coordinates.x} y: {scena.coordinates.y}</span>)}</div>
      <div>id сцены {selectedScene?.id}</div>
    </div>
  );
};