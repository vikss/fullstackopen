const Person = ({ person }) => {
  return (
    <tr key={person.id}>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  );
};
export default Person;
