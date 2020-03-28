import React, { useState } from 'react';
import moment from 'moment';

const RoundInner = props => {
  const { round, handleReveal, revealed, handleChange } = props;

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
                  question.answer.length === 0 || round.form
                    ? 'answer--input'
                    : round.show_answers === true && revealed === true
                    ? 'answer'
                    : 'answer spoiler'
                }
              >
                <em>
                  {question.answer.length === 0 ||
                  round.show_answers === false ? (
                    <>
                      <label
                        hidden
                        htmlFor={`answer--${index + 1}`}
                      >{`answer--${index + 1}`}</label>
                      <input
                        className="Polaris-TextField__Input Polaris-TextField__Input--answer"
                        id={`answer--${index + 1}`}
                        name={`answer--${index + 1}`}
                        type="text"
                        placeholder="Answer here"
                        onChange={handleChange}
                      />
                    </>
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
  const { questions } = round;
  const answersArray = [...questions];

  const [answers, updateAnswers] = useState(answersArray);

  const handleReveal = () => updateRevealed(!revealed);

  const handleChange = e => {
    const answerIndex = e.target.name.split('--')[1] - 1;
    const stateCopy = [...answers];
    stateCopy[answerIndex].answer = e.target.value;
    updateAnswers(stateCopy);
  };

  const handleSubmit = e => {
    const team = e.target.querySelector('.answer-form__team').value;
    const encode = data => {
      return Object.keys(data)
        .map(
          key =>
            encodeURIComponent(key.question) +
            '=' +
            encodeURIComponent(data[key.question])
        )
        .join('&');
    };
    const answersObj = {};
    const answersForPost = answersArray
      .map((answer, index) => ({
        [index + 1]: `${answer.question}: ${answer.answer}`,
      }))
      
    answersForPost.push(`Team: ${team}`);
    answersForPost.forEach((answer) => {
      answersObj[Object.keys(answer)] = answer[Object.keys(answer)];
    })
    console.log(answersObj);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Answers' }),
    })
      .then(() => console.log('Success!'))
      .catch(error => console.log(error));

    e.preventDefault();
  };

  return (
    <div className="round-wrapper">
      {round.form ? (
        <form
          name="Answers"
          data-netlify="true"
          method="POST"
          onSubmit={handleSubmit}
        >
          <details open={props.index === 0 ? true : ''}>
            <RoundInner
              index={props.index}
              round={round}
              revealed={revealed}
              handleReveal={handleReveal}
              handleChange={handleChange}
            />
            <span className="answer-form__submit--wrapper">
              <p className="answer-form__submit--header Polaris-Heading">
                Submit your answers
              </p>
              <input
                required
                className="Polaris-TextField__Input answer-form__team"
                placeholder="Team name"
                name="Team name"
                type="text"
              />
              <button type="submit" className="reveal Polaris-Button">
                Submit answers
              </button>
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
