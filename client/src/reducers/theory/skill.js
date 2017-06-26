const skill = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return action.user.skill;
    default:
      return state;
  }
};

export default skill;
