import Person from "./Person";
const Persons = (props) => {
  return (
    <table>
      <tbody>
        {props.persons
          .filter(
            (person) =>
              props.filter === "" ||
              person.name.toLowerCase() === props.filter.toLowerCase()
          )
          .map((person) => (
            <Person person={person} key={person.id}></Person>
          ))}
      </tbody>
    </table>
  );
};
export default Persons;
