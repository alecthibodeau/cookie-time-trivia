/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

/* Styles */
import homeStyles from '../styles/home-styles';
import variables from '../styles/_variables';

function Home() {

	return (
		<div css={{marginTop: '24px'}}>
			<div css={{height: '48px'}}>
				<Link
					to={'/game/geology'}
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
					Geology Trivia
				</Link>
			</div>
			<div>
				<div>
					Gameplay
				</div>
				<div>
					Cookie Time Trivia rewards you with a cookie for each correct answer.
				</div>
			</div>
		</div>
  );
}

export default Home;
