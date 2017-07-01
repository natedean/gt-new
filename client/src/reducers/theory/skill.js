const skill = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return action.user.skill;
    default:
      return state;
  }
};

export default skill;
