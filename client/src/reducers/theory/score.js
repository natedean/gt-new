const score = (state = 0, action) => {
  switch (action.type) {
    case 'ANSWER':
      return action.isCorrect ? state + 1 : state;
    case 'FETCH_USER_SUCCESS':
      return action.user.totalCorrect;
    default:
      return state;
  }
};

export default score;
