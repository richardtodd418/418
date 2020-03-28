import React from 'react';

const Leaderboard = props => {
  const sortTeams = list => {
    const reordered = list.sort((a, b) => {
      const scoresA = a.scores;
      const scoresB = b.scores;

      let initA = 0;
      const totalScoreA = scoresA.reduce((a, b) => a + b.score, initA);
      let initB = 0;
      const totalScoreB = scoresB.reduce((a, b) => a + b.score, initB);
      return totalScoreB - totalScoreA;
    });
    return reordered;
  };
  const { teams } = props;
  const sortedTeams = sortTeams(teams);

  return (
    <div className="leaderboard">
      <span className="leaderboard__header--rounds">Rounds</span>
      <span className="leaderboard__header leaderboard__header--team">
        Team
      </span>
      <span className="leaderboard__header">1</span>
      <span className="leaderboard__header">2</span>
      <span className="leaderboard__header">3</span>
      <span className="leaderboard__header">4</span>
      <span className="leaderboard__header">5</span>
      <span className="leaderboard__header">6</span>
      <span className="leaderboard__header">7</span>
      <span className="leaderboard__header">8</span>
      <span className="leaderboard__header">9</span>
      <span className="leaderboard__header">10</span>
      <span className="leaderboard__header">Total</span>
      {sortedTeams.map((team, index) => {
        const { scores } = team;
        let init = 0;
        const totalScore = scores.reduce((a, b) => a + b.score, init);
        return (
          <React.Fragment key={index}>
            <span className="leaderboard__team">
              {team.name}({team.members})
            </span>
            {scores.map((score, index) => (
              <span key={index}>
                {score.score}
                {/*`/${score.max}`*/}
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
