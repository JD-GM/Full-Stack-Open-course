import { useState } from "react";

const Statistics = ({ good, neutral, bad, all }) => {
  let average = (good - bad) / all;
  let positive = (good / all) * 100;
  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const countGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const countNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const countBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={countGood}>good</button>
      <button onClick={countNeutral}>neutral</button>
      <button onClick={countBad}>bad</button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;
