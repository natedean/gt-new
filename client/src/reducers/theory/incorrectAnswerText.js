const incorrectAnswerText = (state = null, action) => {
  switch (action.type) {
    case 'SET_INCORRECT_ANSWER_TEXT':
      return String(action.text);
    case 'SET_QUESTION':
      return null;
    default:
      return state;
  }
};

export default incorrectAnswerText;
