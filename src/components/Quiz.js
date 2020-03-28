import React, { useState, useCallback } from 'react';
import Round from './Round';
import rounds from '../data/rounds';
import {  Toast } from '@shopify/polaris';


const Quiz = () => {
  const [quizRounds] = useState(rounds);
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const toastMarkup = active ? (
    <Toast content="Answers submitted" onDismiss={toggleActive} />
  ) : null;
  return (
    <div className="quiz-wrapper">
      {quizRounds.map((round, index) => (
        <Round key={`Round--${index}`} round={round} index={index} toggleActive={toggleActive}/>
      ))}
      {toastMarkup}
    </div>
  );
};

export default Quiz;
