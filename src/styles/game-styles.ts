/* Variables */
import variables from './_variables';

const gameStyles = {

  gameBoard: {
    padding: '1.5rem',
    margin: '0 auto'
  },

  scoreContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    fontSize: '1.125rem',
    fontWeight: '700'
  },

  nextQuestionButtonContainer: {
    display: 'flex'
  },

  resultsImage: {
    display: 'flex'
  },

  resultsImageDiscsContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem auto auto',
    padding: '.75rem',
    borderRadius: '.25rem'
  },

  resultsImageDisc: {
    width: '3.5rem',
    height: '3.5rem',
    margin: '0 .25rem',
    borderRadius: '50%'
  },

  resultsImageDiscPlaceholder: {
    background: `radial-gradient(${variables.colorSilver} 48%, ${variables.colorWhite} 50%)`
  },

  resultsImageDiscCookie: {
    width: '3.5rem',
    filter: `drop-shadow(0 0 .75rem ${variables.colorHtmlYellow})`
  },

  sadFace: {
    width: '6rem',
    margin: '1rem auto 0'
  },

  results: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',

    'div': {
      marginTop: '1.25rem'
    },

    'div:first-of-type': {
      fontSize: '1.5rem',
      fontWeight: '700'
    },

    'button': {
      marginTop: '1.5rem'
    }
  }
};

export default gameStyles;
