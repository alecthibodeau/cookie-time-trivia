import { Dispatch, SetStateAction } from 'react';

/* Interfaces */
import HighScore from './HighScore';
import Theme from './Theme';

interface GameSettingsProps {
  highScore: HighScore | null;
  highScoreMessage: string;
  onUpdateBestScore: Dispatch<SetStateAction<HighScore | null>>;
  theme: Theme | null;
}

export default GameSettingsProps;
