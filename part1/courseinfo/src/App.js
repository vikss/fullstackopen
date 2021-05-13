import React from "react";

const App = () => {
  const course = {
    name: "Half Stack application development",
    part: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content partinfo={course}></Content>
      <Total
        total={
          course.part[0].exercises +
          course.part[1].exercises +
          course.part[2].exercises
        }
      ></Total>
    </div>
  );
};
const Header = (props) => <h1>{props.course}</h1>;
const Content = (props) => {
  const parts = props.partinfo;
  return (
    <div>
      <Part
        name={parts.part[0].name}
        exercises={parts.part[0].exercises}
      ></Part>
      <Part
        name={parts.part[1].name}
        exercises={parts.part[1].exercises}
      ></Part>
      <Part
        name={parts.part[2].name}
        exercises={parts.part[2].exercises}
      ></Part>
    </div>
  );
};
const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
);
const Total = (props) => <p>Number of exercises {props.total}</p>;

export default App;
