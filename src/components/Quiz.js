import React, { useState, useCallback } from 'react';
import Round from './Round';
import { Toast } from '@shopify/polaris';

import { useLocation } from 'react-router-dom';
import rounds2 from '../data/rounds2';
import rounds1 from '../data/rounds';
import { useEffect } from 'react';

const Quiz = () => {
  let location = useLocation();
  useEffect(() => {
    const rounds = {
      '/': rounds2,
      '/flange': rounds1,
    };
    updateCurrentRound(rounds[location.pathname]);
  }, [location]);
  const [active, setActive] = useState(false);
  const [currentRounds, updateCurrentRound] = useState(rounds2);
  const filterRounds = currentRounds.filter(round => round.published);
  const toggleActive = useCallback(() => setActive(active => !active), []);
  const toastMarkup = active ? (
    <Toast content="Answers submitted" onDismiss={toggleActive} />
  ) : null;
  return (
    <div className="quiz-wrapper">
      {filterRounds.map((round, index) => (
        <Round
          key={`Round--${index}`}
          round={round}
          index={index}
          toggleActive={toggleActive}
        />
      ))}
      {toastMarkup}
    </div>
  );
};

export default Quiz;
