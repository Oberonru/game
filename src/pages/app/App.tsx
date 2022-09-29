import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initApp } from "./state/actions";
import style from "./app.module.css";
import { Canvas } from "../../features/canvas/Canvas";
import { Transition } from "../../features/transitions/Transitions";
import { SceneProperties } from "../../features/sceneProperties/SceneProperties";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp()), [dispatch];
    console.log("dispatch", [dispatch]);
  });

  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <Canvas />
        <Transition />
      </div>
      <div className={style.rightContainer}>
        <div className={style.imgContainer}>img</div>
        <SceneProperties />
      </div>
    </div>
  );
}

export default App;
