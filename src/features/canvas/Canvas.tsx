import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as selectors from "./state/selectors";
import * as actions from "./state/actions";
import style from "./canvas.module.css";

const POINT_SIZE = [30, 30];

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasContext, setCanvasContext] = useState(
    canvasRef.current?.getContext("2d")
  );
  const scenes = useSelector(selectors.getScenes);
  const dispatch = useDispatch();
  const selectedScene = useSelector(selectors.selectedScene);

  const [canvasSize, setCanvasSize] = useState<Array<number | undefined>>([
    undefined,
    undefined,
  ]);

  useEffect(() => {
    setCanvasContext(canvasRef.current?.getContext("2d"));
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setCanvasSize([
        canvasRef.current?.offsetWidth,
        canvasRef.current?.offsetWidth,
      ]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    drawScenes();
  }, [scenes, canvasSize, selectedScene]);

  const drawPoint = (x: number, y: number, color = "red") => {
    if (canvasContext) {
      let posX = x - POINT_SIZE[0] / 2;
      let posY = y - POINT_SIZE[1] / 2;

      canvasContext.fillStyle = color;
      canvasContext.fillRect(posX, posY, POINT_SIZE[0], POINT_SIZE[1]);
      // canvasContext.clearRect(posX, posY, POINT_SIZE[0], POINT_SIZE[1]);
    }
  };

  const drawScenes = () => {
    for (let i = 0; i < scenes.length; i++) {
      let color =
        selectedScene && scenes[i].id === selectedScene.id ? "blue" : "green";

      drawPoint(scenes[i].coordinates.x, scenes[i].coordinates.y, color);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const center = {
      x: e.clientX - e.currentTarget.offsetLeft,
      y: e.clientY - e.currentTarget.offsetTop,
    };
    const radius = POINT_SIZE[0] / 2;

    const selectedScene = scenes.find(
      (scene) =>
        radius >
        Math.sqrt(
          Math.pow(center.x - scene.coordinates.x, 2) +
            Math.pow(center.y - scene.coordinates.y, 2)
        )
    );

    console.log("getSelectScene", selectedScene);

    if (selectedScene) {
      dispatch(actions.selectScene(selectedScene));
    } else {
      dispatch(actions.createScene(center));
    }
  };

  return (
    <canvas
      className={style.canvas}
      ref={canvasRef}
      width={600}
      height={420}
      /*       width={canvasSize[0]}
       */ /* height={canvasSize[1]} */
      onClick={handleClick}
    />
  );
};