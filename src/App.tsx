/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import Game from './components/Game';
import Home from './components/Home';

/* Styles */
import appStyles from './styles/app-styles';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname === '/' ? '' : process.env.PUBLIC_URL}>
      <div>
        <div css={appStyles.mainDiv}>
          <h1>
            Cookie Time Trivia
          </h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={'game/geology'} element={<Game></Game>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
