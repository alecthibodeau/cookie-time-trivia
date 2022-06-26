/* Variables */
import variables from './_variables';

const questionStyles = {

  questionContainer: {
    marginTop: '1.25rem'
  },

  choices: {
    display: 'flex',
    marginTop: '1rem'
  },

  choicesColumn: {
    flex: 1
  },

  choiceContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '.5rem',
    marginBottom: '1rem'
  },

  choiceInput: {
    width: '1.5rem',
    height: '1.5rem',
    minWidth: '1.5rem',
    minHeight: '1.5rem',
    marginLeft: '0',
    marginRight: '.75rem'
  },

  messaging: {
    paddingTop: '.75rem',
    paddingBottom: '1.25rem',
    minHeight: '3rem'
  },

  messagingCorrectAnswer: {
    fontWeight: '700',
    color: variables.colorCorrectAnswer
  },

  messagingIncorrectAnswer: {
    fontWeight: '700',
    color: variables.colorIncorrectAnswer
  }
};

export default questionStyles;
