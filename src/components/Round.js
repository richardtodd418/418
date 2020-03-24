import React from 'react';
import moment from 'moment';

const Round = props => {
  const { round } = props;
  console.log(props.key);
  return (
    <div className="round-wrapper">
      <details open={props.index === 0 ? 'true' : ''}>
        <summary>
          <span>{round.title}</span>
          {' - '}
          <span>{round.date}</span>
          {' - '}
          <span>{moment(round.deadline).format('YYYY/DD/MM - hh:mm')}</span>
        </summary>
        <ul className="questions">
          {round.show_answers ? (
            <li className="question--instructions">
              <button className="reveal">Reveal answers</button>
            </li>
          ) : (
            ''
          )}
          {round.questions.map((question, index) => (
            <li className="question-wrapper">
              <p>
                <span className="question">
                  {index + 1}. {question.question}
                </span>
                <span
                  className={
                    question.answer.length === 0 || round.show_answers === false ? 'answer' : 'answer spoiler'
                  }
                >
                  <em>
                    {question.answer.length === 0 || round.show_answers === false
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
