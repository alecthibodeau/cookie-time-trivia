/* Interfaces */
import GameSettingsProps from './GameSettingsProps';
import TriviaItem from './TriviaItem';

interface GameProps extends GameSettingsProps {
  category: TriviaItem[];
}

export default GameProps;
