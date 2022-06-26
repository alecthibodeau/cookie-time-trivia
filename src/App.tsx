/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import Game from './components/Game';
import Home from './components/Home';

/* Styles */
import appStyles from './styles/app-styles';

function App() {
  const [baseName, setBaseName] = useState<string>('/');

  useEffect(() => {
    if (window.location.pathname !== '/') setBaseName(process.env.PUBLIC_URL);
  }, []);

  return (
    <BrowserRouter basename={baseName}>
      <div>
        <div>
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
