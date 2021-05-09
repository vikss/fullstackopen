import React from "react";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const partinfo = {
    part1: { name: part1, exercises: exercises1 },
    part2: { name: part2, exercises: exercises2 },
    part3: { name: part3, exercises: exercises3 },
  };
  return (
    <div>
      <Header course={course}></Header>
      <Content partinfo={partinfo}></Content>
      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>
  );
};
const Header = (props) => <h1>{props.course}</h1>;
const Content = (props) => {
  const partinfo = props.partinfo;
  return (
    <div>
      <Part
        name={partinfo.part1.name}
        exercises={partinfo.part1.exercises}
      ></Part>
      <Part
        name={partinfo.part2.name}
        exercises={partinfo.part2.exercises}
      ></Part>
      <Part
        name={partinfo.part3.name}
        exercises={partinfo.part3.exercises}
      ></Part>
    </div>
  );
};
const Part = (props) => (
  <p>
    {props.name} {props.exercises1}
  </p>
);
const Total = (props) => <p>Number of exercises {props.total}</p>;

export default App;
