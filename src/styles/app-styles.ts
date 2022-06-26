/* Variables */
import variables from './_variables';

const appStyles = {

  buttonPrimary: {
    padding: '.75rem 1rem',
    border: '.0625rem solid transparent',
    borderRadius: '.5rem',
    fontSize: '.875rem',
    fontWeight: '700',
    backgroundColor: variables.colorBlack,
    color: variables.colorWhite
  },

  progressBarOuter: {
    width: '14rem',
    margin: '0 auto',
    height: '.625rem',
    borderStyle: 'solid',
    borderWidth: '.625rem',
    borderRadius: '1rem'
  },

  progressBarInner: {
    width: '0',
    height: '.625rem',
    borderRadius: '1rem',
    animationFillMode: 'forwards'
  }
}

export default appStyles;
