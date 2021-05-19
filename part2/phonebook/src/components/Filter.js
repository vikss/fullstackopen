const Filter = (props) => {
  return (
    <div>
      filter shown with
      <input value={props.value} onChange={props.handleFilterChange}></input>
    </div>
  );
};
export default Filter;
