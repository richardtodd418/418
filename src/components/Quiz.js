import React, { useState } from 'react';
import Round from './Round';
import rounds from '../data/rounds';

const Quiz = () => {
  const [quizRounds] = useState(rounds);

  return (
    <div className="quiz-wrapper">
      {quizRounds.map((round, index) => (
        <Round key={`Round--${index}`} round={round} index={index}/>
      ))}
    </div>
  );
};

export default Quiz;
