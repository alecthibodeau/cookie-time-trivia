/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';

/* Components */
import Question from './Question';
import ResultsImageDisc from './ResultsImageDisc';
import Score from './Score';

/* Helpers */
import getCurrentDateAndTime from '../helpers/date-and-time';

/* Interfaces */
import GameProps from '../interfaces/GameProps';
import HighScore from '../interfaces/HighScore';

/* Images */
import sadFace from '../assets/images/sad-face.svg';

/* Constants */
import { expertiseLevels, totalNumberOfQuestions } from '../constants/game-constants';
import { localStorageKeyBestScore } from '../constants/app-constants';

/* Styles */
import appStyles from '../styles/app-styles';
import gameStyles from '../styles/game-styles';

function Game(props: GameProps) {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [currentScoreCount, setCurrentScoreCount] = useState<number>(0);
  const [isButtonClickedWithNoAnswer, setIsButtonClickedWithNoAnswer] = useState<boolean>(false);
  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState<boolean>(false);
  const [isGameBoardShown, setIsGameBoardShown] = useState<boolean>(true);
  const [isGameActive, setIsGameActive] = useState<boolean>(true);
  const [isUserAtLastQuestion, setIsUserAtLastQuestion] = useState<boolean>(false);

  useEffect(() => {
    if (currentQuestionNumber + 1 === totalNumberOfQuestions) {
      setIsUserAtLastQuestion(true);
    }
  }, [currentQuestionNumber]);

  useEffect(() => {
    if (isCurrentQuestionAnswered && isButtonClickedWithNoAnswer) {
      setIsButtonClickedWithNoAnswer(false);
    }
    if (isUserAtLastQuestion) {
      sendUserToResults();
    }
  }, [isCurrentQuestionAnswered]);

  function compareGameResults(): void {
    if (!props.highScore || currentScoreCount > props.highScore.count) {
      saveNewHighScore(getCurrentDateAndTime());
    }
  }

  function saveNewHighScore(dateAndTime: string): void {
    const newHighScore: HighScore = {
      count: currentScoreCount,
      date: dateAndTime,
      questionsQuantity: totalNumberOfQuestions
    }
    localStorage.setItem(localStorageKeyBestScore, JSON.stringify(newHighScore));
    props.onUpdateBestScore(newHighScore);
  }

  function sendUserToResults(): void {
    setIsGameActive(false);
    compareGameResults();
    setTimeout(() => setIsGameBoardShown(false), 3000);
  }

  function renderResultsImageDiscs(discItem: string, discIndex: number) {
    return (
      <ResultsImageDisc
        key={discItem + discIndex}
        item={discItem}
        index={discIndex}
        score={currentScoreCount}
      />
    )
  }

  function onClickAdvance(): void {
    if (isCurrentQuestionAnswered) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
      setIsCurrentQuestionAnswered(false);
    } else {
      setIsButtonClickedWithNoAnswer(true);
    }
  }

  function onClickPlayAgain(): void {
    setCurrentQuestionNumber(0);
    setCurrentScoreCount(0);
    setIsCurrentQuestionAnswered(false);
    setIsGameBoardShown(true);
    setIsGameActive(true);
    setIsUserAtLastQuestion(false);
  }

  return (
    <div>
      {isGameBoardShown &&
      <div className="game-board" css={gameStyles.gameBoard}>
        <Score
          questionNumber={currentQuestionNumber}
          scoreCount={currentScoreCount}
          totalQuestions={totalNumberOfQuestions}
        />
        <Question
          questionCount={currentQuestionNumber}
          scoreCount={currentScoreCount}
          isQuestionActive={isGameActive}
          isQuestionSkipAttempted={isButtonClickedWithNoAnswer}
          onUpdateIsAnsweredStatus={setIsCurrentQuestionAnswered}
          onUpdateScore={setCurrentScoreCount}
          triviaItems={props.category}
        />
        {isGameActive && !isUserAtLastQuestion &&
        <div className="next-question-button-container" css={gameStyles.nextQuestionButtonContainer}>
          <button
            name="next question"
            css={[
              appStyles.buttonPrimary,
              props.theme?.buttonPrimary,
              {'&:hover': {backgroundColor: props.theme?.colorShade}}
            ]}
            onClick={onClickAdvance}>
            Next question
          </button>
        </div>}
        {!isGameActive &&
        <div css={[appStyles.progressBarOuter, props.theme?.progressBarOuter, {position: 'relative'}]}>
          <div
            className="progress-bar-inner"
            css={[appStyles.progressBarInner, props.theme?.progressBarInner, {position: 'relative'}]}>
          </div>
        </div>}
      </div>}

      {!isGameBoardShown &&
      <div>
        <div css={gameStyles.resultsImage}>
          {currentScoreCount > 0 &&
          <div css={gameStyles.resultsImageDiscsContainer}>
            {Array(totalNumberOfQuestions).fill('disc').map(renderResultsImageDiscs)}
          </div>}
          {currentScoreCount === 0 &&
          <img src={sadFace} alt="sad face illustration" css={gameStyles.sadFace} />}
        </div>
        <div css={[gameStyles.results, {flexDirection: 'column'}]}>
          <div css={{textAlign: 'center'}}>
            {expertiseLevels[currentScoreCount]}
          </div>
          <div>
            {`You got ${currentScoreCount} out of ${totalNumberOfQuestions} questions
            right${currentScoreCount > 1 ? '!' : '.'}`}
          </div>
          {props.highScore &&
          <div css={{textAlign: 'center'}}>
            {props.highScoreMessage}
          </div>}
          <button
            name="play again"
            css={[
              appStyles.buttonPrimary,
              props.theme?.buttonPrimary,
              {'&:hover': {backgroundColor: props.theme?.colorShade}}
            ]}
            onClick={onClickPlayAgain}>
            Play again!
          </button>
        </div>
      </div>}

    </div>
  );
}

export default Game;
