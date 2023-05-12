/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

/* Constants */
import { categoryNames } from '../constants/app-constants';

/* Styles */
import homeStyles from '../styles/home-styles';
import variables from '../styles/_variables';

function Home() {

  function renderGameLinks(category: string) {
    return (
      <Link
        key={`${category}Trivia`}
        to={`/game/${category}`}
        css={[
          homeStyles.link,
          {
            textTransform: 'capitalize',
            textAlign: 'center',
            color: variables.colorBlack,
            '&:hover': {
              backgroundColor: variables.colorBlack,
              color: variables.colorWhite
            }
          }
        ]}>
        {category} Trivia
      </Link>
    )
  }

  return (
    <div css={[homeStyles.container, {flexDirection: 'column'}]}>
      <div>
        <div css={[homeStyles.title, {textAlign: 'center'}]}>
          Welcome to Cookie Time Trivia!
        </div>
        <ul css={homeStyles.unorderedList}>
          <li>Click the gear icon to edit your settings</li>
          <li>Read the gameplay section below</li>
          <li>Choose a category to start a new game:</li>
        </ul>
      </div>
      <div css={homeStyles.categories}>
        {categoryNames.map(renderGameLinks)}
      </div>
      <div css={homeStyles.gameplay}>
        <div css={[homeStyles.gameplayTitle, {textAlign: 'center'}]}>
          Gameplay
        </div>
        <div>
          Cookie Time Trivia rewards you with a cookie for each correct answer.
          There are multiple trivia categories from which to choose. Each game consists of five questions.
          Your best score is saved. If you tie your best score then the earlier score remains your best score.
        </div>
      </div>
      <div css={[homeStyles.projectInformation, {textAlign: 'center'}]}>
          See the React/TypeScript code at <a href="https://github.com/alecthibodeau/cookie-time-trivia">GitHub</a><br />
          <a href="https://alect.me">Alec Thibodeau</a>, {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Home;
