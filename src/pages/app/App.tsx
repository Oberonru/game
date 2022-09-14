import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { useDispatch } from "react-redux";
import { initApp } from "./state/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp()), [dispatch];
  });

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
