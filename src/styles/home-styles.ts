/* Variables */
import variables from './_variables';

const homeStyles = {

  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem'
  },

  title: {
    fontWeight: '700'
  },

  unorderedList: {
    paddingInlineStart: '1rem'
  },

  categories: {
    display: 'flex',
    justifyContent: 'center'
  },

  link: {
    padding: '1rem',
    border: `1px solid ${variables.colorBlack}`,
    borderRadius: '.5rem',
    margin: '.5rem 1rem',
    textDecoration: 'none'
  },

  gameplay: {
    padding: '1rem',
    marginTop: '1rem',
    maxWidth: '40rem'
  },

  gameplayTitle: {
    marginBottom: '.5rem'
  },

  projectInformation: {
    margin: '1rem'
  }
};

export default homeStyles;
