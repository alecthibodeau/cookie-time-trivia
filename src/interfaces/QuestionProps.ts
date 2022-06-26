import { Dispatch, SetStateAction } from 'react';

/* Interfaces */
import TriviaItem from './TriviaItem';

interface QuestionProps {
  isQuestionActive: boolean;
  isQuestionSkipAttempted: boolean;
  onUpdateIsAnsweredStatus: Dispatch<SetStateAction<boolean>>;
  onUpdateScore: Dispatch<SetStateAction<number>>;
  questionCount: number;
  scoreCount: number;
  triviaItems: TriviaItem[];
}

export default QuestionProps;
