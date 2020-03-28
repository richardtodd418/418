import React, { useState } from 'react';
import moment from 'moment';

const AnswerInput = props => {
  const { question, index } = props;
  return (
    <>
      <label for={`answer--${index + 1}`} />
      <input
        className="Polaris-TextField__Input Polaris-TextField__Input--answer"
        id={`answer--${index + 1}`}
        name={`${index + 1}. ${question.question}`}
        type="text"
        placeholder="Answer here"
      />
    </>
  );
};

const RoundInner = props => {
  const { round, handleReveal, revealed } = props;
  return (
    <>
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
                  question.answer.length === 0
                    ? 'answer--input'
                    : round.show_answers === true && revealed === true
                    ? 'answer'
                    : 'answer spoiler'
                }
              >
                <em>
                  {question.answer.length === 0 ||
                  round.show_answers === false ? (
                    <AnswerInput question={question} index={index} />
                  ) : (
                    question.answer
                  )}
                </em>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

const Round = props => {
  const [revealed, updateRevealed] = useState(false);
  const { round } = props;

  const handleReveal = () => updateRevealed(!revealed);

  return (
    <div className="round-wrapper">
      {round.form ? (
        <form name={`Answers: ${round.title}`} data-netlify="true" method="POST" netlify>
          <details open={props.index === 0 ? true : ''}>
            <RoundInner
              index={props.index}
              round={round}
              revealed={revealed}
              handleReveal={handleReveal}
            />
            <span className="answer-form__submit--wrapper">
              <p className="answer-form__submit--header Polaris-Heading">
                Submit your answers
              </p>
              <input
                required
                className="Polaris-TextField__Input"
                placeholder="Team name"
                name="Team name"
                type="text"
              />
              <button type="submit" className="reveal Polaris-Button">Submit answers</button>
            </span>
          </details>
        </form>
      ) : (
        <details open={props.index === 0 ? true : ''}>
          <RoundInner
            round={round}
            revealed={revealed}
            handleReveal={handleReveal}
          />
        </details>
      )}
    </div>
  );
};

export default Round;
