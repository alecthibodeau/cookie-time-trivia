import { Dispatch, SetStateAction } from 'react';

/* Interfaces */
import GameSettingsProps from './GameSettingsProps';

interface HeaderProps extends GameSettingsProps {
  onUpdateThemeName: Dispatch<SetStateAction<string | null>>;
}

export default HeaderProps;
