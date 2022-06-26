/** @jsxImportSource @emotion/react */

/* Interfaces */
import ScoreProps from '../interfaces/ScoreProps';

/* Styles */
import gameStyles from '../styles/game-styles';

function Score(props: ScoreProps) {
  return (
    <div css={gameStyles.scoreContainer}>
      <div>
        {`Question ${props.questionNumber + 1} of ${props.totalQuestions}`}
      </div>
      <div>
        {`Score: ${props.scoreCount}`}
      </div>
    </div>
  );
}

export default Score;
