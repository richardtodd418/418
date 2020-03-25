import React from 'react';
import teams from '../data/teams';

const Leaderboard = () => {
  return (
    <div>
      <div className="scores--header">
        <div>Team</div>
        <div>Round 1</div>
        <div>Round 2</div>
        <div>Total</div>
      </div>
      {teams.map((team, index) => (
        <TeamRow key={index} team={team} />
      ))}
    </div>
  );
};

const TeamRow = props => {
  const { team } = props;
  const { scores } = team;
  let init = 0;
  const totalScore = scores.reduce((a, b) => a + b.score, init);

  return (
    <ul className ="scores--row">
      <li>
        {team.name}({team.members})
      </li>
      {scores.map((score, index) => (
        <li key={index}>
          {score.score}/{score.max}
        </li>
      ))}
      <li>{totalScore}</li>
    </ul>
  );
};

export default Leaderboard;
