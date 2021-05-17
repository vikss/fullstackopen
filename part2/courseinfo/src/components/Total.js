const Total = ({ parts }) => {
  return (
    "total of " +
    parts.reduce((result, item) => result + item.exercises, 0) +
    " exercises"
  );
};

export default Total;
