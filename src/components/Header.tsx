/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* Interfaces */
import HeaderProps from '../interfaces/HeaderProps';

/* Images */
import cookie from '../assets/images/cookie-illustration.svg';

/* Constants */
import { localStorageKeyBestScore, themeNames } from '../constants/app-constants';

/* Styles */
import appStyles from '../styles/app-styles';
import headerStyles from '../styles/header-styles';
import themes from '../styles/themes-styles';

function Header(props: HeaderProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const keydown = 'keydown';
    window.addEventListener(keydown, keyDownHandler);
    return function cleanupEventListener() {
      window.removeEventListener(keydown, keyDownHandler);
    };
  }, [isModalVisible]);

  function keyDownHandler({ key }: KeyboardEvent): void {
    if (key === 'Escape' && isModalVisible) {
      setIsModalVisible(false);
    }
  }

  function onClickResetHighScore(): void {
    props.onUpdateBestScore(null);
    localStorage.removeItem(localStorageKeyBestScore);
  }

  function onClickSetThemeName(themeName: string): void {
    props.onUpdateThemeName(themeName);
  }

  function renderThemeButton(themeName: string) {
    return (
      <button
        key={`${themeName}Button`}
        name={`choose ${themeName} theme`}
        css={[
          appStyles.buttonPrimary,
          themes[themeName].buttonPrimary,
          headerStyles.settingsThemeButton,
          {
            textTransform: 'capitalize',
            '&:hover': {backgroundColor: themes[themeName].colorShade}
          }
        ]}
        onClick={() => onClickSetThemeName(themeName)}>
        {themeName}
      </button>
    )
  }

  return (
    <div>
      <header css={[headerStyles.header, props.theme?.header]}>
        <div css={headerStyles.titleContainer}>
          <img src={cookie} alt="cookie illustration" css={headerStyles.cookieIllustration} />
          <div css={[headerStyles.title, {whiteSpace: 'nowrap'}]}>
            Cookie Time Trivia
          </div>
        </div>
        <div css={headerStyles.iconsContainer}>
          <Link to={'/'} className="material-symbols-outlined" css={headerStyles.link} >
            home
          </Link>
          <button
            name="settings"
            className="material-symbols-outlined"
            css={headerStyles.iconButton}
            onClick={() => setIsModalVisible(!isModalVisible)}>
            settings
          </button>
        </div>
      </header>

      {isModalVisible &&
      <div css={headerStyles.modalContainer}>
        <div css={[headerStyles.modal, {position: 'absolute'}]}>
          <div css={headerStyles.modalHeader}>
            <button
              name="close"
              className="material-symbols-outlined"
              css={headerStyles.modalCloseButton}
              onClick={() => setIsModalVisible(false)}>
              close
            </button>
          </div>
          <div>
            <div css={[headerStyles.modalBody, {flexDirection: 'column'}]}>

              <div css={headerStyles.settingsTitle}>
                Settings
              </div>

              <div css={[headerStyles.sectionContainer, {flexDirection: 'column'}]}>
                <div css={headerStyles.settingsSubtitle}>
                  Choose a Visual Theme
                </div>
                <div css={{display: 'flex'}}>
                  {themeNames.map(renderThemeButton)}
                </div>
              </div>

              <div css={[headerStyles.sectionContainer, {flexDirection: 'column'}]}>
                <div css={headerStyles.settingsSubtitle}>
                  Best Score
                </div>
                <div css={headerStyles.settingsDetails}>
                  {props.highScoreMessage}
                </div>
                <button
                  name="reset best score"
                  css={[
                    appStyles.buttonPrimary,
                    props.theme?.buttonPrimary,
                    {'&:hover': {backgroundColor: props.theme?.colorShade}}
                  ]}
                  onClick={onClickResetHighScore}>
                  Reset Best Score
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>}

    </div>
  );
}

export default Header;
