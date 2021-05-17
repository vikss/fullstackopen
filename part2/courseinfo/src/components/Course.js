import Content from "./Content.js";
import Header from "./Header.js";
import Total from "./Total.js";
const Course = ({ courses }) => {
  return courses.map((course) => (
    <div key={course.id}>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  ));
};

export default Course;
