/* Variables */
import variables from './_variables';

const headerStyles = {

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '.5rem',
    borderRadius: '.25rem',
    backgroundColor: variables.colorBlack
  },

  titleContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  cookieIllustration: {
    width: '2.5rem'
  },

  title: {
    marginLeft: '.5rem',
    fontSize: '1.25rem',
    color: variables.colorWhite
  },

  iconsContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  link: {
    marginRight: '.5rem',
    textDecoration: 'none',
    color: variables.colorWhite
  },

  iconButton: {
    padding: '0',
    border: 'none',
    backgroundColor: 'transparent',
    color: variables.colorWhite,
    cursor: 'default'
  },

  modalContainer: {
    display: 'flex',
    justifyContent: 'center'
  },

  modal: {
    zIndex: '1',
    top: '50%',
    transform: 'translateY(-50%)',
    minWidth: '20rem',
    borderRadius: '.5rem',
    backgroundColor: variables.colorLightSilver
  },

  modalHeader: {
    display: 'flex',
    justifyContent: 'flex-end'
  },

  modalCloseButton: {
    padding: '0',
    border: 'none',
    margin: '.25rem',
    backgroundColor: 'transparent',
    cursor: 'default'
  },

  modalBody: {
    display: 'flex',
    alignItems: 'center'
  },

  settingsTitle: {
    marginBottom: '1rem',
    fontWeight: '700',
    fontSize: '1.25rem'
  },

  sectionContainer: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '16rem',
    margin: '.5rem auto 2rem'
  },

  settingsSubtitle: {
    fontWeight: '700'
  },

  settingsDetails: {
    margin: '.25rem auto .5rem'
  },

  settingsThemeButton: {
    margin: '.5rem .25rem'
  }
};

export default headerStyles;
