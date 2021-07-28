const Person = ({ person, deleteNumber }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td>
        <button onClick={() => deleteNumber(person)}>delete</button>
      </td>
    </tr>
  );
};
export default Person;
