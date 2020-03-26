import React from 'react';
import teams from '../data/teams';

const sortTeams = list => {
  const reordered = list.sort((a,b) => {
    const scoresA  = a.scores;
    const scoresB = b.scores;
    
    let initA = 0;
    const totalScoreA = scoresA.reduce((a, b) => a + b.score, initA);
    let initB = 0;
    const totalScoreB = scoresB.reduce((a, b) => a + b.score, initB);
    return  totalScoreB - totalScoreA;
  });
  return reordered;
}

const sortedTeams = sortTeams(teams);

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
      {sortedTeams.map((team, index) => {
        const { scores } = team;
        let init = 0;
        const totalScore = scores.reduce((a, b) => a + b.score, init);
        return (
          <React.Fragment key={index}>
            <span>
              {team.name}({team.members})
            </span>
            {scores.map((score, index) => (
              <span key={index}>
                {score.score}{/*`/${score.max}`*/}
              </span>
            ))}
            <span>{totalScore}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Leaderboard;
