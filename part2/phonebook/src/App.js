import React, { useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
const App = () => {
  let id = 0;
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: ++id },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObj = { name: newName, number: newNumber, id: ++id };
      setPersons(persons.concat(personObj));
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        value={newFilter}
        handleFilterChange={handleFilterChange}
      ></Filter>
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        changePerson={handlePersonChange}
        changeNumber={handleNumberChange}
        addPerson={addPerson}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter}></Persons>
    </div>
  );
};

export default App;
