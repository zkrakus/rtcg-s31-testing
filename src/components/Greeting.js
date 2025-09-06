import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState();

  const changedTestHandler = () => {
    setChangedText(true);
  }

  return <div>
    <h2>Hello World!</h2>
    {!changedText && <Output>It's good to see you!</Output>}
    {changedText && <Output>Changed!</Output>}
    <button onClick={changedTestHandler}>Change Text~</button>
  </div>
}

export default Greeting;