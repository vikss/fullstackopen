import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";
import Notification from "./components/Notification";
import "./index.css";
const App = () => {
  let id = 0;
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [newMessage, setNewMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((data) => setPersons(data));
  }, []);
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
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        //debugger;
        let personObject = persons.find((person) => person.name === newName);
        let newPersonObject = { ...personObject, number: newNumber };
        personService
          .update(newPersonObject.id, newPersonObject)
          .then((data) => {
            setPersons(
              persons.map((person) =>
                person.id !== newPersonObject.id ? person : data
              )
            );
            setNewMessage(`Updated the details of ${newName}`);
            setTimeout(() => setNewMessage(null), 5000);
          })
          .catch((error) => {
            //debugger;

            setNewMessage(
              `Information of ${newName} has been removed from server`
            );
            setTimeout(() => setNewMessage(null), 5000);
            setPersons(persons.filter((person) => person.name !== newName));
          });

        // setPersons()
      }
    } else if (newName && newNumber) {
      let personObj = { name: newName, number: newNumber };
      personService.add(personObj).then((data) => {
        setPersons(persons.concat(data));
      });
      setNewMessage(`Added ${newName}`);
    }
    //console.log(message);

    setNewName("");
    setNewNumber("");
  };
  const deleteNumber = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={newMessage}></Notification>
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
      <Persons
        persons={persons}
        filter={newFilter}
        deleteNumber={deleteNumber}
      ></Persons>
    </div>
  );
};

export default App;
