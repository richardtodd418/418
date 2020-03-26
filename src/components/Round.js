import React, { useState } from 'react';
import moment from 'moment';

const Round = props => {
  const [revealed, updateRevealed] = useState(false);
  const { round } = props;

  const handleReveal = () => updateRevealed(!revealed);

  return (
    <div className="round-wrapper">
      <details open={props.index === 0 ? true : ''}>
        <summary>
          <span className="summary--title">{round.title}</span>
          <br />
          <br />
          <span className="summary--info">Start: {round.date}</span>
          <br />
          <span className="summary--info">
            End: {moment(round.deadline).format('YYYY/MM/DD - HH:mm')}
          </span>
        </summary>
        <ul className="questions">
          <li className="question-wrapper">
            <p>
              <span className="question question--header">Questions</span>
              <span className="answer answer--header">
                Answers{' '}
                {round.show_answers ? (
                  <button
                    className="reveal Polaris-Button"
                    onClick={handleReveal}
                  >
                    {revealed ? 'Hide' : 'Reveal'}
                  </button>
                ) : (
                  ''
                )}
              </span>
            </p>
          </li>
          {round.questions.map((question, index) => (
            <li key={index} className="question-wrapper">
              <p>
                <span className="question">
                  {index + 1}. {question.question}
                </span>
                <span
                  className={
                    question.answer.length === 0 ||
                    (round.show_answers === true && revealed === true)
                      ? 'answer'
                      : 'answer spoiler'
                  }
                >
                  <em>
                    {question.answer.length === 0 ||
                    round.show_answers === false
                      ? 'Coming soon...'
                      : question.answer}
                  </em>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default Round;
