import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  let average = (good - bad) / all;
  let positive = (good / all) * 100;

  return (
    <div>
      <h2>give feedback</h2>
      <button
        onClick={() => {
          setGood(good + 1);
          setAll(all + 1);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
          setAll(all + 1);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
          setAll(all + 1);
        }}
      >
        bad
      </button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  );
};

export default App;
