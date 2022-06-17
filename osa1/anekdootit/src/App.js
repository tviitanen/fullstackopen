import { useState } from "react";

const Header = ({ name }) => <h2>{name}</h2>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const RandomInt = () => Math.floor(Math.random() * 7);

const Anecdote = ({ text, votes }) => (
  <div>
    <p>{text}</p>
    <p>has {votes} votes</p>
  </div>
);
const MostVotes = ({ anecdotes, voteArray }) => {
  const highestVoteCount = Math.max(...voteArray);
  const highestVotedIndex = voteArray.indexOf(highestVoteCount);
  const mostVoted = anecdotes[highestVotedIndex];
  if (highestVoteCount === 0) {
    return <p>No votes yet</p>;
  }

  return (
    <div>
      <p>{mostVoted}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  );
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [voteArray, setVotes] = useState(new Uint8Array(7));

  const setToSelected = (newValue) => {
    setSelected(newValue);
  };

  const vote = () => {
    console.log(selected);
    const copy = [...voteArray];
    // kasvatetaan taulukon paikan n arvoa yhdellä
    copy[selected] += 1;
    setVotes(copy);
    console.log(copy[selected]);
  };

  return (
    <div>
      <Header name="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes={voteArray[selected]} />
      <Button handleClick={() => vote()} text="vote" />
      <Button
        handleClick={() => setToSelected(RandomInt)}
        text="next anecdote"
      />
      <Header name="Anecdote with most votes" />
      <MostVotes anecdotes={anecdotes} voteArray={voteArray} />
    </div>
  );
};

export default App;
