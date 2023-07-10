import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showHideParagraph, setShowHideParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("Running App");
  const onButtonClick = useCallback(() => {
    if (allowToggle) {
      setShowHideParagraph((prev) => {
        return !prev;
      });
    }
  }, [allowToggle]);

  const onAllowToggle = () => {
    setAllowToggle((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showHideParagraph} />
      <Button onClick={onButtonClick}>Allow Toggle</Button>
      <Button onClick={onAllowToggle}>Toggle</Button>
    </div>
  );
}

export default App;
