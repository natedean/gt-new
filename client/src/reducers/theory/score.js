const score = (state = 0, action) => {
  switch (action.type) {
    case 'ANSWER':
      return action.isCorrect ? state + 1 : state;
    default:
      return state;
  }
};

export default score;
