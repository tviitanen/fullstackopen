import { useState } from "react";

const Header = () => (
  <div>
    <h1>give feedback</h1>
  </div>
);

const Statistics = (props) => {
  if (props.valueArray[0] + props.valueArray[1] + props.valueArray[2] === 0)
    return (
      <>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </>
    );
  else
    return (
      <div>
        <h1>statistics</h1>
        <div>good {props.valueArray[0]}</div>
        <div>neutral {props.valueArray[0]}</div>
        <div>bad {props.valueArray[0]}</div>
        <div>
          all {props.valueArray[0] + props.valueArray[1] + props.valueArray[2]}
        </div>
        <div>
          average{" "}
          {(props.valueArray[0] * 1 +
            props.valueArray[1] * 0 +
            props.valueArray[2] * -1) /
            (props.valueArray[0] + props.valueArray[1] + props.valueArray[2])}
        </div>
        <div>
          positive{" "}
          {(props.valueArray[0] /
            (props.valueArray[0] + props.valueArray[1] + props.valueArray[2])) *
            100}{" "}
          %
        </div>
      </div>
    );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

/*
const DisplayGood = (props) => <div>good {props.value}</div>;
const DisplayNeutral = (props) => <div>neutral {props.value}</div>;
const DisplayBad = (props) => <div>bad {props.value}</div>;
const DisplayAll = (props) => {
  return (
    <div>
      all {props.valueArray[0] + props.valueArray[1] + props.valueArray[2]}{" "}
    </div>
  );
};
const DisplayAverage = (props) => {
  return (
    <div>
      average{" "}
      {(props.valueArray[0] * 1 +
        props.valueArray[1] * 0 +
        props.valueArray[2] * -1) /
        (props.valueArray[0] + props.valueArray[1] + props.valueArray[2])}
    </div>
  );
};
const DisplayPositive = (props) => {
  return (
    <div>
      positive{" "}
      {(props.valueArray[0] /
        (props.valueArray[0] + props.valueArray[1] + props.valueArray[2])) *
        100}{" "}
      %
    </div>
  );
};

*/

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => {
    console.log("value now:", newValue);
    setGood(newValue);
  };
  const setToNeutral = (newValue) => {
    console.log("value now:", newValue);
    setNeutral(newValue);
  };
  const setToBad = (newValue) => {
    console.log("value now:", newValue);
    setBad(newValue);
  };
  return (
    <div>
      <Header />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Statistics valueArray={[good, neutral, bad]} />
      {/*
      <DisplayGood value={good} />
      <DisplayNeutral value={neutral} />
      <DisplayBad value={bad} />
      <DisplayAll valueArray={[good, neutral, bad]} />
      <DisplayAverage valueArray={[good, neutral, bad]} />
      <DisplayPositive valueArray={[good, neutral, bad]} />
  */}
    </div>
  );
};

export default App;
