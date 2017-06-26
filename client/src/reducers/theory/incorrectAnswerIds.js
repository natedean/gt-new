const incorrectAnswerIds = (state = [], action) => {
  switch(action.type) {
    case 'ANSWER':
      const index = state.indexOf(action.id);
      if (action.isCorrect) {
        return index > -1 ? state.slice(0, index).concat(state.slice(index + 1, state.length)) : state;
      }
      return index > -1 ? state : [...state, action.id];
    case 'RESET_ANSWERS':
      return [];
    default:
      return state;
  }
};

export default incorrectAnswerIds;
