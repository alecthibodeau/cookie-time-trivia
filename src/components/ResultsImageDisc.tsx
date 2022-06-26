/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';

/* Interfaces */
import ResultsImageDiscProps from '../interfaces/ResultsImageDiscProps';

/* Images */
import cookie from '../assets/images/cookie-illustration.svg';

/* Styles */
import gameStyles from '../styles/game-styles';
import variables from '../styles/_variables';

function ResultsImageDisc(props: ResultsImageDiscProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 375 * (props.index + 1));
  }, []);

  return (
    <div
      key={props.item + props.index}
      css={[
        gameStyles.resultsImageDisc,
        isVisible && (props.score >= props.index + 1) ?
        {backgroundColor: variables.colorLightSilver} :
        gameStyles.resultsImageDiscPlaceholder
      ]}
    >
      {props.score >= props.index + 1 &&
      <img
        src={cookie}
        alt="cookie illustration"
        css={[
          gameStyles.resultsImageDiscCookie,
          isVisible ? {visibility: 'visible'} : {visibility: 'hidden'}
        ]} />}
    </div>
  );
}

export default ResultsImageDisc;
