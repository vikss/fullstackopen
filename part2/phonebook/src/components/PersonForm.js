const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        name: <input onChange={props.changePerson} value={props.name} />
      </div>
      <div>
        number:{" "}
        <input onChange={props.changeNumber} value={props.number}></input>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
