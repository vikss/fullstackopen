import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil in programming.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
  let greatest = 0;

  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };
  const handleVote = () => {
    const voteCopy = [...vote];
    voteCopy[selected] += 1;
    setVote(voteCopy);
  };
  const greatestVotes = () => {
    for (let i = 0; i < vote.length; i++) {
      if (vote[i] > vote[greatest]) greatest = i;
    }
    return anecdotes[greatest];
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </p>

      <h1>Anecdote with most votes</h1>
      <p>{greatestVotes()}</p>
    </div>
  );
};

export default App;
