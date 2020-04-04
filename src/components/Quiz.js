import React, { useState, useCallback } from 'react';
import Round from './Round';
import { Toast, Banner } from '@shopify/polaris';

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
  const filterRounds = currentRounds.filter((round) => round.published);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const toastMarkup = active ? (
    <Toast content="Answers submitted" onDismiss={toggleActive} />
  ) : null;
  return (
    <div className="quiz-wrapper">
      <Banner title="Round 8" status="info">
        <strong>FINAL ROUND</strong><br/>
        Lists - final round. Each question has multiple potential correct
        answers. You only need to pick one. However there are rules:
        <ol>
          <li>
            If another team picks the same answer as you, you get zero
            points.
          </li>
          <li>
            If you submit multiple answers for a question you get zero
            points.
          </li>
          <li>
            I have also picked an answer for most questions, if you choose
            that answer, then zero points.
          </li>
          <li>
            There will also be some bonus points, which will be revealed at
            the end.
          </li>
        </ol>
      </Banner>
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
