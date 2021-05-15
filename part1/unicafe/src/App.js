import React, { useState } from "react";

const Statistic = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.value}</td>
  </tr>
);

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <Statistic name="good" value={props.good}></Statistic>
        <Statistic name="neutral" value={props.neutral}></Statistic>
        <Statistic name="bad" value={props.bad}></Statistic>
        <Statistic name="all" value={props.all}></Statistic>
        <Statistic
          name="average"
          value={(props.good - props.bad) / props.all}
        ></Statistic>
        <Statistic
          name="positive"
          value={(props.good * 100) / props.all + " %"}
        ></Statistic>
      </tbody>
    </table>
  );
};
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let all = good + neutral + bad;
  if (all > 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good"></Button>
        <Button
          handleClick={() => setNeutral(neutral + 1)}
          text="neutral"
        ></Button>
        <Button handleClick={() => setBad(bad + 1)} text="bad"></Button>

        <h1>statistics</h1>
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          all={all}
        ></Statistics>
      </div>
    );
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  );
};

export default App;
