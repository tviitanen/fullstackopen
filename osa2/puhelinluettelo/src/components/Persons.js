import Person from "./Person";

const Persons = (props) => {
  return props.persons
    .filter((person) =>
      person.name.toLowerCase().includes(props.search.toLowerCase())
    )
    .map((person) => <Person person={person} search={props.search} />);
};

export default Persons;
