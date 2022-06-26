/* Interfaces */
import TriviaItem from './TriviaItem';

interface TriviaItems {
  [key: string]: TriviaItem[];
  geology: TriviaItem[];
  animals: TriviaItem[];
  space: TriviaItem[];
}

export default TriviaItems;
