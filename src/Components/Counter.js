// Counter App
import React, { useState } from "react";

function Counter({ heading, desc }) {
  const [click, setClick] = useState(0);
  // let click = 0;
  const increaseClicks = () => {
    // setClick(click + 1);
    setClick((prevCounter) => prevCounter + 1);
    setClick((prevCounter) => prevCounter + 1);
    setClick((prevCounter) => prevCounter + 1);
    // click = click + 1;
    console.log("increase", click);
  };
  const decreaseClicks = () => {
    setClick(click - 1);
    // click = click - 1;
    console.log("decrease", click);
  };
  return (
    <div className="App">
      <header className="App-header p-5">
        <h2 className="text-lg font-bold py-2">{heading}</h2>
        <p style={{ margin: 0, padding: 0 }}>
          {desc ||
            "This is a counter app & it increase and decrease through buttons."}
        </p>
        <p style={{ marginTop: "15px" }}>{click} times</p>
        <div>
          <button className="border-0 p-0 w-10 bg-blue-400 text-white font-bold text-xl mt-2 rounded-sm" onClick={increaseClicks}>+</button> &nbsp;
          <button className="border-0 p-0 w-10 bg-blue-400 text-white font-bold text-xl mt-2 rounded-sm" onClick={decreaseClicks}>-</button>
        </div>
      </header>
    </div>
  );
}

Counter.defaultProps = {
  heading: "Counter App"
};

export default Counter;
