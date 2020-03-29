import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Loading, Spinner } from '@shopify/polaris';

const RoundInner = props => {
  const { round, handleReveal, revealed, handleChange, answers } = props;
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
        <li className="question-wrapper question-wrapper--header">
          <p>
            <span className="question question--header">Questions</span>
            <span className="answer answer--header">
              <span>Answers </span>
              {round.show_answers && round.publish_answers ? (
                <button
                  className="reveal Polaris-Button"
                  onClick={handleReveal}
                >
                  {revealed ? 'Hide' : 'Show'}
                  <span className="reveal--mobile">&nbsp;answers</span>
                </button>
              ) : (
                ''
              )}
            </span>
          </p>
        </li>
        {round.questions.map((question, index) => {
          return (
            <li
              key={index}
              className={`question-wrapper question-wrapper--${index}`}
            >
              <p>
                <span className="question">
                  {index + 1}. {question.question}
                </span>
                <span
                  className={
                    round.form
                      ? 'answer--input'
                      : (round.show_answers === true && revealed === true ) || question.answer === ''
                      ? 'answer'
                      : 'answer spoiler'
                  }
                >
                  <em>
                    {round.show_answers === false ? (
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
                          value={answers[index].answer}
                        />
                      </>
                    ) : (
                      question.answer === '' ? 'Coming soon...' : question.answer
                    )}
                  </em>
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Round = props => {
  const [revealed, updateRevealed] = useState(false);
  const [teamValue, updateTeam] = useState('');
  const { round, toggleActive } = props;
  const { questions } = round;
  const answersArray = [...questions];
  const [answers, updateAnswers] = useState(answersArray);
  const [localStorageLoaded, updateLocalStorageLoaded] = useState(false);
  const [loading, updateLoading] = useState(false);
  const loadingMarkup = loading && <Loading />;
  const spinnerMarkup = loading && (
    <Spinner
      accessibilityLabel="Submitting answers"
      size="large"
      color="inkLightest"
    />
  );

  useEffect(() => {
    if (round.form && localStorageLoaded === false) {
      const checkLocal = localStorage.getItem('questionState') !== null;
      if (checkLocal) {
        const localAnswers = JSON.parse(localStorage.getItem('questionState'));
        updateAnswers(localAnswers);
        updateLocalStorageLoaded(true);
      }
    }
  }, []);
  const handleReveal = () => updateRevealed(!revealed);

  const handleChange = async e => {
    const answerIndex = e.target.name.split('--')[1] - 1;
    const stateCopy = [...answers];
    stateCopy[answerIndex].answer = e.target.value;
    localStorage.setItem('questionState', JSON.stringify(stateCopy));
    updateAnswers(stateCopy);
  };

  const handleTeamChange = e => {
    updateTeam(e.target.value);
  };

  const clearLocal = () => {
    const checkLocal = localStorage.getItem('questionState') !== null;
    if (checkLocal) {
      localStorage.removeItem('questionState');
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    updateLoading(true);
    const backupURL = `https://script.google.com/macros/s/AKfycbz69zDAc-x3YGSDzzXkYb1s0xyVBK_bE_F3iQEgUE-0liI3TcSS/exec`;
    const team = e.target.querySelector('.answer-form__team').value;
    const encode = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
    };

    const answersObj = {};
    const answersForPost = answers.map((answer, index) => ({
      [index + 1]: `${answer.question}: ${answer.answer}`,
    }));

    answersForPost.forEach(answer => {
      answersObj[Object.keys(answer)] = answer[Object.keys(answer)];
    });
    answersObj.team = `${props.round.title} - ${team}`;
    // submit to google form as backup
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch(backupURL, { method: 'POST', body: data})
      .then(response => console.log('Backed Up!', response))
      .catch(error => console.error('Error!', error.message));

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Answers', ...answersObj }),
    })
      .then(() => {
        console.log('Success!');
        updateLoading(false);
        toggleActive();
        clearLocal();
        const resetAnswers = answers.map(answer => ({
          question: answer.question,
          answer: '',
        }));
        updateAnswers(resetAnswers);
        updateTeam('');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="round-wrapper">
      {loadingMarkup}
      {round.form ? (
        <form
          name="Answers"
          data-netlify="true"
          method="POST"
          onSubmit={handleSubmit}
          netlify="true"
        >
          <details open={props.index === 0 ? true : ''}>
            <input type="hidden" name="round" value={props.round.title} id="round"/>
            <RoundInner
              index={props.index}
              round={round}
              revealed={revealed}
              handleReveal={handleReveal}
              handleChange={handleChange}
              answers={answers}
            />
            <span className={`answer-form__submit--wrapper ${loading ? 'answer-form__submit--wrapper-loading' : ''}`}>
              <p className="answer-form__submit--header Polaris-Heading">
                {loading ? 'Submitting' : 'Submit your answers'}
                {loading ? spinnerMarkup : ''}
              </p>
              {loading ? (
                ''
              ) : (
                <>
                  <label hidden htmlFor="team-name">
                    Team name
                  </label>
                  <input
                    required
                    className="Polaris-TextField__Input answer-form__team"
                    placeholder="Team name"
                    name="Team name"
                    id="team-name"
                    type="text"
                    value={teamValue}
                    onChange={handleTeamChange}
                  />
                  <button type="submit" className="reveal Polaris-Button">
                    Submit
                  </button>
                </>
              )}
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
