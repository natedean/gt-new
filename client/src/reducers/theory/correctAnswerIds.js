const correctAnswerIds = (state = [], action) => {
  switch (action.type) {
    case 'ANSWER':
      return action.isCorrect ? [...state, action.id] : state;
    case 'RESET_ANSWERS':
      return [];
    default:
      return state;
  }
};

export default correctAnswerIds;
