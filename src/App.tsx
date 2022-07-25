/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import Game from './components/Game';
import Header from './components/Header';
import Home from './components/Home';

/* Interfaces */
import HighScore from './interfaces/HighScore';
import Theme from './interfaces/Theme';

/* Constants */
import { categoryNames, localStorageKeyBestScore } from './constants/app-constants';
import triviaItems from './constants/trivia-items';

/* Styles */
import themesStyles from './styles/themes-styles';

export default function App() {
  const [baseUrl, setBaseUrl] = useState<string>('/');
  const [bestScore, setBestScore] = useState<HighScore | null>(null);
  const [appThemeName, setAppThemeName] = useState<string | null>(null);
  const [appTheme, setAppTheme] = useState<Theme | null>(null);

  const bestScoreMessage = bestScore ? `Your best score so far was ${bestScore.count}
  out of ${bestScore.questionsQuantity} questions, which you got on ${bestScore.date}.` :
  'You don\'t have a best score.';

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setBaseUrl(process.env.PUBLIC_URL);
    }
  }, []);

  useEffect(() => {
    const storedScore = localStorage.getItem(localStorageKeyBestScore);
    if (storedScore) {
      setBestScore(JSON.parse(storedScore));
    }
    setAppThemeName('placid');
  }, []);

  useEffect(() => {
    if (appThemeName) {
      setAppTheme(themesStyles[appThemeName]);
    }
  }, [appThemeName]);

  function renderGameRoutes(categoryName: string) {
    return (
      <Route
        key={`${categoryName}Category`}
        path={`/game/${categoryName}`}
        element={
          <Game
            highScore={bestScore}
            highScoreMessage={bestScoreMessage}
            onUpdateBestScore={setBestScore}
            theme={appTheme}
            category={triviaItems[categoryName]}
          />
        }
      />
    )
  }

  return (
    <BrowserRouter basename={baseUrl}>
      <div css={appTheme?.appFontFamily}>
        <Header
          highScore={bestScore}
          highScoreMessage={bestScoreMessage}
          onUpdateBestScore={setBestScore}
          theme={appTheme}
          onUpdateThemeName={setAppThemeName}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          {categoryNames.map(renderGameRoutes)}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
