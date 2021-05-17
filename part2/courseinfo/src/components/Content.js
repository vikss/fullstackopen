import Part from "./Part";
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <Part key={part.id} part={parts[i]}></Part>
      ))}
    </div>
  );
};

export default Content;
