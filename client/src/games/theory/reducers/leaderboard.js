const leaderboard = (state = null, action) => {
  switch (action.type) {
    case 'SET_LEADERBOARD':
      return action.users;
    default:
      return state;
  }
};

export default leaderboard;
