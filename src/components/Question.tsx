/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';

/* Interfaces */
import Choice from '../interfaces/Choice';
import QuestionProps from '../interfaces/QuestionProps';
import TriviaItem from '../interfaces/TriviaItem';

/* Styles */
import questionStyles from '../styles/question-styles';

function Question(props: QuestionProps) {
  const [currentTriviaItem, setCurrentTriviaItem] = useState<TriviaItem | null>(null);
  const [correctAnswerTextForDisplay, setCorrectAnswerTextForDisplay] = useState<string>('');
  const [correctChoices, setCorrectChoices] = useState<string[]>([]);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [isCorrectAnswerSingle, setIsCorrectAnswerSingle] = useState<boolean>(true);
  const [isUserAnswerCorrect, setIsUserAnswerCorrect] = useState<boolean>(false);
  const [isUserAnswerSelected, setIsUserAnswerSelected] = useState<boolean>(false);
  const [isUserTryingToSkipQuestion, setIsUserTryingToSkipQuestion] = useState<boolean>(false);
  const [userChoiceIndividual, setUserChoiceIndividual] = useState<string>('');
  const [userChoices, setUserChoices] = useState<string[]>([]);

  useEffect(() => {
    loadNewQuestion();
  }, [props.questionCount]);

  useEffect(() => {
    if (props.isQuestionSkipAttempted) {
      setIsUserTryingToSkipQuestion(true);
    }
  }, [props.isQuestionSkipAttempted]);

  useEffect(() => {
    if (userChoices.length) {
      checkForCorrectChoice();
    }
  }, [userChoices]);

  useEffect(() => {
    if (isUserAnswerSelected) {
      formatCorrectAnswerText(correctChoices);
      if (isUserTryingToSkipQuestion) {
        setIsUserTryingToSkipQuestion(false);
      }
    }
  }, [isUserAnswerSelected]);

  useEffect(() => {
    const keydown = 'keydown';
    window.addEventListener(keydown, keyDownHandler);
    return function cleanupEventListener() {
      window.removeEventListener(keydown, keyDownHandler);
    };
  }, []);

  function keyDownHandler({ key }: KeyboardEvent): void {
    setKeyPressed(key);
  }

  function loadNewQuestion(): void {
    const currentTriviaItem = props.triviaItems[props.questionCount];
    setCurrentTriviaItem(currentTriviaItem);
    getTriviaItemCorrectChoices(currentTriviaItem.choices);
    if (props.questionCount > 0) {
      resetUserInputDataOnNewQuestion();
    }
  }

  function resetUserInputDataOnNewQuestion(): void {
    if (isUserAnswerCorrect) setIsUserAnswerCorrect(false);
    if (isUserAnswerSelected) setIsUserAnswerSelected(false);
    if (userChoiceIndividual) setUserChoiceIndividual('');
    if (userChoices) setUserChoices([]);
  }

  function getTriviaItemCorrectChoices(choices: Choice[]): void {
    let correctChoicesCount = 0;
    setCorrectChoices([]);
    for (let i = 0; i < choices.length; i++) {
      if (choices[i].isCorrect) {
        setCorrectChoices(oldArray => [...oldArray, choices[i].text]);
        correctChoicesCount++;
      }
    }
    setIsCorrectAnswerSingle(correctChoicesCount === 1 ? true : false);
  }

  function checkForCorrectChoice(): void {
    if (correctChoices.includes(userChoiceIndividual)) {
      if (userChoices.length === correctChoices.length) {
        props.onUpdateScore(props.scoreCount + 1);
        setIsUserAnswerCorrect(true);
        updateIsAnsweredStatus();
      }
    } else {
      updateIsAnsweredStatus();
    }
  }

  function updateIsAnsweredStatus(): void {
    props.onUpdateIsAnsweredStatus(true);
    setIsUserAnswerSelected(true);
  }

  function formatCorrectAnswerText(choices: string[]): void {
    let text = choices[0];
    if (choices.length > 1) {
      for (let i = 1; i < choices.length; i++) {
        i === choices.length - 1 ? text = `${text} and ${choices[i]}` : text = `${text}, ${choices[i]}`;
      }
    }
    setCorrectAnswerTextForDisplay(text);
  }

  function halveArrayLength(arrayLength: number): number {
    return Math.ceil(arrayLength / 2);
  }

  function evaluateKeyForSpaceOrEnter(event: React.BaseSyntheticEvent): void {
    if (keyPressed === ' ' || keyPressed === 'Enter') {
      onSelectChoice(event);
    }
  }

  function isChoiceClickable(choiceText: string): boolean {
    return props.isQuestionActive && !userChoices.includes(choiceText);
  }

  function onSelectChoice(event: React.BaseSyntheticEvent): void {
    const choice = event.target.value;
    if (!isUserAnswerSelected && !userChoices.includes(choice)) {
      setUserChoiceIndividual(choice);
      setUserChoices(userChoices.concat(choice));
    }
  }

  function renderChoice(choice: Choice) {
    return (
      <div key={choice.text} css={questionStyles.choiceContainer}>
        <input
          id={choice.text}
          onKeyPress={isChoiceClickable(choice.text) ? evaluateKeyForSpaceOrEnter : () => void 0}
          onMouseDown={isChoiceClickable(choice.text) ? onSelectChoice : () => void 0}
          onChange={() => void 0}
          type={isCorrectAnswerSingle ? 'radio' : 'checkbox'}
          name="answer"
          value={choice.text}
          checked={userChoices.includes(choice.text)}
          css={questionStyles.choiceInput} />
        <label htmlFor={choice.text}>
          {choice.text}
        </label>
      </div>
    )
  }

  return (
    <div>
      {currentTriviaItem &&
      <div css={questionStyles.questionContainer}>
        <div>
          {currentTriviaItem.question}
        </div>
        <div className="choices" css={questionStyles.choices}>
          <div css={questionStyles.choicesColumn}>
            {currentTriviaItem.choices
              .slice(0, halveArrayLength(currentTriviaItem.choices.length))
              .map(renderChoice)}
          </div>
          <div css={questionStyles.choicesColumn}>
            {currentTriviaItem.choices
              .slice(-halveArrayLength(currentTriviaItem.choices.length))
              .map(renderChoice)}
          </div>
        </div>
        <div css={questionStyles.messaging}>
          {!isUserAnswerSelected && isUserTryingToSkipQuestion &&
          <div>
            Please answer this question before proceeding to the next.
          </div>}
          {isUserAnswerSelected && correctAnswerTextForDisplay &&
          <div>
            {isUserAnswerCorrect &&
            <div css={questionStyles.messagingCorrectAnswer}>
              You got it right!
            </div>}
            {!isUserAnswerCorrect &&
            <div>
              <span css={questionStyles.messagingIncorrectAnswer}>
                Sorry.&nbsp;
              </span>
              <span>
                The correct answer is {correctAnswerTextForDisplay}.
              </span>
            </div>}
          </div>}
        </div>
      </div>}
    </div>
  );
}

export default Question;
