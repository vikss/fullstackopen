import Person from "./Person";
const Persons = (props) => {
  return (
    <table>
      <tbody>
        {props.persons.map((person) => (
          <Person person={person} key={person.id}></Person>
        ))}
      </tbody>
    </table>
  );
};
export default Persons;
