import React from 'react';
import teams from '../data/teams';

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <span className="leaderboard--header">Team</span>
      <span className="leaderboard--header">1</span>
      <span className="leaderboard--header">2</span>
      <span className="leaderboard--header">3</span>
      <span className="leaderboard--header">4</span>
      <span className="leaderboard--header">5</span>
      <span className="leaderboard--header">6</span>
      <span className="leaderboard--header">7</span>
      <span className="leaderboard--header">8</span>
      <span className="leaderboard--header">9</span>
      <span className="leaderboard--header">10</span>
      <span className="leaderboard--header">Total</span>
      {teams.map((team, index) => {
        const { scores } = team;
        let init = 0;
        const totalScore = scores.reduce((a, b) => a + b.score, init);
        return (
          <>
            <span>
              {team.name}({team.members})
            </span>
            {scores.map((score, index) => (
              <span key={index}>
                {score.score}{/*`/${score.max}`*/}
              </span>
            ))}
            <span>{totalScore}</span>
          </>
        );
      })}
    </div>
  );
};

const TeamRow = props => {
  const { team } = props;
  const { scores } = team;
  let init = 0;
  const totalScore = scores.reduce((a, b) => a + b.score, init);

  return (
    <ul className="scores--row">
      <span>
        {team.name}({team.members})
      </span>
      {scores.map((score, index) => (
        <li key={index}>
          {score.score}/{score.max}
        </li>
      ))}
      <span>{totalScore}</span>
    </ul>
  );
};

export default Leaderboard;
