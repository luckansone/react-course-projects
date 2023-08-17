import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello there!</h1>
      {!changedText && <Output>Nice to see you.</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}></button>
    </div>
  );
};

export default Greeting;
